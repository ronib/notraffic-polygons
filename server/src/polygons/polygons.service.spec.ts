import { Test, TestingModule } from '@nestjs/testing';
import { PolygonsService } from './polygons.service';
import { Polygon } from './polygon.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreatePolygonDto } from './dto/create-polygon.dto';



describe('PolygonsService', () => {
  let service: PolygonsService;
  let repo: Repository<Polygon>;

const mockPolygon: CreatePolygonDto = {
  name: 'P1',
  points: [[1, 2], [3, 4]]
};

  const repoMock = {
    find: jest.fn().mockResolvedValue([mockPolygon]),
    save: jest.fn().mockImplementation(p => Promise.resolve(p)),
    delete: jest.fn().mockResolvedValue({ affected: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PolygonsService,
          { provide: getRepositoryToken(Polygon), useValue: repoMock },

      ],
    }).compile();

    service = module.get<PolygonsService>(PolygonsService);
    repo = module.get<Repository<Polygon>>(getRepositoryToken(Polygon));

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return polygons', async () => {
    expect(await service.getPolygons()).toEqual([mockPolygon]);
  });

  it('should create polygon', async () => {
    expect(await service.createPolygon(mockPolygon)).toEqual(mockPolygon);
    expect(repoMock.save).toHaveBeenCalledWith(mockPolygon);
  });

  it('should delete polygon', async () => {
    await service.deletePolygon(1);
    expect(repoMock.delete).toHaveBeenCalledWith(1);
  });
});
