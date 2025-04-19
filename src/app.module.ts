import { Module } from '@nestjs/common';
import { RedisModule } from './redis/redis.module';
import { HttpModule } from '@nestjs/axios';
import { RoutingController } from './routing/routing.controller';
import { RoutingService } from './routing/routing.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    RedisModule,
    HttpModule,
  ],
  controllers: [RoutingController],
  providers: [RoutingService],
})
export class AppModule {}
