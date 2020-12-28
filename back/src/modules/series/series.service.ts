import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SeriesEntity } from './series.entity';

@Injectable()
export class SeriesService {
  constructor(
    @InjectRepository(SeriesEntity)
    private repository: Repository<SeriesEntity>,
  ) {}

  findAll(): Promise<SeriesEntity[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise<SeriesEntity> {
    return this.repository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
