import { Injectable } from '@nestjs/common';
import { RoutingDto } from './routing.dto';
import { HttpService } from '@nestjs/axios';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class RoutingService {
  constructor(
    private readonly redisService: RedisService,
    private readonly httpService: HttpService,
  ) {}

  async processRoute(dto: RoutingDto) {
    const key = `route:${dto.deviceId}`;

    const lockKey = `lock:${dto.deviceId}`;
    const acquired = await this.redisService
      .getClient()
      .set(lockKey, 'locked', {
        NX: true,
        EX: 5,
      });

    if (!acquired) {
      await this.sendAlert({
        type: 'routing-error',
        message: 'Solicitud simultánea en curso',
        source: 'routing-service',
        deviceId: dto.deviceId,
      });
      return { status: 'error', message: 'Solicitud en proceso' };
    }

    try {
      // Simulación A*
      const route = [
        {
          lat: (dto.origin.lat + dto.destination.lat) / 2,
          lng: (dto.origin.lng + dto.destination.lng) / 2,
        },
      ];
      const payload = {
        deviceId: dto.deviceId,
        origin: dto.origin,
        destination: dto.destination,
        route,
        status: 'success',
        cacheTTL: 300,
      };

      await this.redisService
        .getClient()
        .set(key, JSON.stringify(payload), 'EX', 300);
      return payload;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Error desconocido';
      await this.sendAlert({
        type: 'routing-error',
        message: errorMessage,
        source: 'routing-service',
        deviceId: dto.deviceId,
      });
      return { status: 'error', message: 'No se pudo calcular ruta' };
    } finally {
      await this.redisService.getClient().del(lockKey);
    }
  }

  async sendAlert(alert: any) {
    try {
      await this.httpService.axiosRef.post(
        process.env.AUDIT_SERVICE_URL + '/alert',
        alert,
      );
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'Error desconocido';
      console.error('Error enviando alerta al audit-service:', errorMessage);
    }
  }
}
