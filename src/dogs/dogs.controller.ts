import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Query,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DogService } from './dogs.service';

import { Dog } from './dogs.model';
import { CreateDogDto } from './dto/create-dog.dto';
import { AllExceptionsFilter } from '../filters/exceptions.filter';

@UseFilters(AllExceptionsFilter)
@Controller('dog')
export class DogController {
  constructor(private dogService: DogService) {}

  @Get()
  getAll(
    @Query('pageNumber') pageNumber?: number,
    @Query('pageSize') pageSize?: number,
    @Query('attribute') attribute?: string,
    @Query('order') order?: 'asc' | 'desc',
  ): Promise<Dog[]> {
    return this.dogService.getAll(pageNumber, pageSize, attribute, order);
  }

  @Get(':id')
  async findOneById(@Param('id') id: string): Promise<Dog> {
    return await this.dogService.findOne(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() createDogDto: CreateDogDto): Promise<Dog> {
    return await this.dogService.create(createDogDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Dog> {
    return await this.dogService.remove(id);
  }
}
