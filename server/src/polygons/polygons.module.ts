import { Module } from '@nestjs/common';
import { PolygonsController } from './polygons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PolygonsService } from './polygons.service';
import { DelayInterceptor } from '../common/delay.interceptor';
import { Polygon } from './polygon.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Polygon])],

  controllers: [PolygonsController],
  providers: [PolygonsService,
  {    provide: 'APP_INTERCEPTOR', useClass: DelayInterceptor }
  ]
})
export class PolygonsModule {}
