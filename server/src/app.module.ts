import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './common/config';
import { PolygonsModule } from './polygons/polygons.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), PolygonsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
