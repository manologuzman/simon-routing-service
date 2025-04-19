import { Test, TestingModule } from '@nestjs/testing';
import { RoutingController } from './routing.controller';
import { RoutingService } from './routing.service';

const mockRoutingService = {
  processRoute: jest.fn().mockResolvedValue({
    deviceId: 'JJW-322',
    origin: { lat: 4.123, lng: -74.123 },
    destination: { lat: 4.567, lng: -74.567 },
    route: [{ lat: 4.222, lng: -74.222 }],
    status: 'success',
    cacheTTL: 300,
  }),
};

describe('RoutingController', () => {
  let controller: RoutingController;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: RoutingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutingController],
      providers: [
        {
          provide: RoutingService,
          useValue: mockRoutingService,
        },
      ],
    }).compile();

    controller = module.get<RoutingController>(RoutingController);
    service = module.get<RoutingService>(RoutingService);
  });

  it('should calculate and return a mock route', async () => {
    const dto = {
      deviceId: 'JJW-322',
      origin: { lat: 4.123, lng: -74.123 },
      destination: { lat: 4.567, lng: -74.567 },
    };

    const result = await controller.handleRoute(dto);
    expect(mockRoutingService.processRoute).toHaveBeenCalled();
    expect(result).toHaveProperty('status', 'success');
  });
});
