import { Controller, Post, Body } from '@nestjs/common';
import { RoutingService } from './routing.service';
import { RoutingDto } from './routing.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('route')
export class RoutingController {
  constructor(private readonly routingService: RoutingService) {}

  @Post()
  @ApiOperation({ summary: 'Solicitar Ruta GPS' })
  @ApiResponse({ status: 201, description: 'Datos solicitados correctamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  async handleRoute(@Body() dto: RoutingDto) {
    return await this.routingService.processRoute(dto);
  }
}
