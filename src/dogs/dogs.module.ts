import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { DogController } from './dogs.controller';
import { DogService } from './dogs.service';
import { Dog } from './dogs.model';

@Module({
  imports: [SequelizeModule.forFeature([Dog])],
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule {}
