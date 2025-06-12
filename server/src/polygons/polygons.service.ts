import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Polygon } from './polygon.entity';
import { CreatePolygonDto } from './dto/create-polygon.dto';


@Injectable()
export class PolygonsService {
 constructor(    @InjectRepository(Polygon)
    private polygonsRepo: Repository<Polygon>,) {}

  async getPolygons() {
    return this.polygonsRepo.find();
  }

  async createPolygon(polygon: CreatePolygonDto) {
    return this.polygonsRepo.save(polygon);
  }

  async deletePolygon(id: number) {
    const result = await this.polygonsRepo.delete(id);
  if (result.affected === 0) {
    console.error(`Polygon with id ${id} not found`);
    //throw new NotFoundException('Polygon not found');
  }
  return { success: true };
  }



}
