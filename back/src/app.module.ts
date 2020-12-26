import { join } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { SeriesEntity } from './modules/series/series.entity';

const database = join(__dirname, '..', '..', 'data', 'sqlite', 'fandoms.db');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database,
      entities: [SeriesEntity],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
