import { DataSourceOptions } from 'typeorm';
import { Polygon } from '../polygons/polygon.entity';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'polygonsdb',
  entities: [Polygon],
  synchronize: true,
};
