import { Controller, Post, Body } from '@nestjs/common';
import { RoutingService } from './routing.service';
import { RoutingDto } from './routing.dto';

@Controller('route')
export class RoutingController {
  constructor(private readonly routingService: RoutingService) {}

  @Post()
  async handleRoute(@Body() dto: RoutingDto) {
    return await this.routingService.processRoute(dto);
  }
}
