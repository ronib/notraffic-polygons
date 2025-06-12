import { Test, TestingModule } from '@nestjs/testing';
import { PolygonsController } from './polygons.controller';
import { PolygonsService } from './polygons.service';
import { CreatePolygonDto } from './dto/create-polygon.dto';

describe('PolygonsController', () => {
  let controller: PolygonsController;
  let service: PolygonsService;

const mockPolygon: CreatePolygonDto  = {
  name: 'P1',
  points: [
    [1, 2],
    [3, 4],
  ],
};
   const serviceMock = {
    getPolygons: jest.fn().mockResolvedValue([mockPolygon]),
    createPolygon: jest.fn().mockResolvedValue(mockPolygon),
    deletePolygon: jest.fn().mockResolvedValue({ success: true }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolygonsController],
      providers: [{ provide: PolygonsService, useValue: serviceMock }],

    }).compile();

    controller = module.get<PolygonsController>(PolygonsController);
    service = module.get<PolygonsService>(PolygonsService);

  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get polygons', async () => {
    expect(await controller.getPolygons()).toEqual([mockPolygon]);
  });

  it('should create polygon', async () => {
    expect(await controller.createPolygon(mockPolygon)).toEqual(mockPolygon);
    expect(serviceMock.createPolygon).toHaveBeenCalledWith(mockPolygon);
  });

  it('should delete polygon', async () => {
    const result = await controller.deletePolygon(1);
    expect(result).toEqual({ success: true });
    expect(serviceMock.deletePolygon).toHaveBeenCalledWith(1);
  });
});
