import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeriesEntity } from './series.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeriesEntity])],
  providers: [],
  controllers: [],
})
export class SeriesModule {}
