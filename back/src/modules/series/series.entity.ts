import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SeriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
