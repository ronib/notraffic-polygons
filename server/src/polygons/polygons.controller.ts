import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { PolygonsService } from './polygons.service';
import { CreatePolygonDto } from './dto/create-polygon.dto';


@Controller('polygons')
export class PolygonsController {
    constructor(private readonly service: PolygonsService) {}
    
    

    @Get('health')
    healthCheck() {
        console.log('OK:');
        return { received: "OK" };
    }


     @Get()
  getPolygons() {
    return this.service.getPolygons();
  }

  @Post()
createPolygon(@Body() polygon: CreatePolygonDto) {
    console.log("Creating polygon:", polygon);
    return this.service.createPolygon(polygon);
  }

  @Delete(':id')
  deletePolygon(@Param('id') id: number) {
    this.service.deletePolygon(id);
    return { success: true };
  }
    
  
}



  
  