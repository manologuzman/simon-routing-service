import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('GeoController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/geo (POST)', () => {
    return request(app.getHttpServer() as unknown as string)
      .post('/geo')
      .send({
        deviceId: 'JJW-322',
        origin: { lat: 4.123, lng: -74.123 },
        destination: { lat: 4.567, lng: -74.567 },
      })
      .expect(201)
      .expect((res) => {
        expect(res.body).toHaveProperty('status');
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
