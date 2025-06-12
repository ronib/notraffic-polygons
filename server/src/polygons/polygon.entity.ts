import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Polygon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('json')
  points: number[][];
}
