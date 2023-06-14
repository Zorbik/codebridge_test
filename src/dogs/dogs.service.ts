import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Dog } from './dogs.model';
import { CreateDogDto } from './dto/create-dog.dto';

@Injectable()
export class DogService {
  constructor(
    @InjectModel(Dog)
    private dogModel: typeof Dog,
  ) {}

  async getAll(
    pageNumber?: number,
    pageSize?: number,
    attribute?: string,
    order?: string,
  ): Promise<Dog[]> {
    const limit = pageSize || 10;
    const offset = pageNumber ? (pageNumber - 1) * limit : 0;
    const orderDirection = order === 'desc' ? 'DESC' : 'ASC';
    const orderAttribute = attribute || 'id';

    return await this.dogModel.findAll({
      limit,
      offset,
      order: [[orderAttribute, orderDirection]],
    });
  }

  async findOne(id: string): Promise<Dog> {
    return await this.dogModel.findOne({
      where: {
        id,
      },
    });
  }

  async create(createDogDto: CreateDogDto): Promise<Dog> {
    return await this.dogModel.create({ ...createDogDto });
  }

  async remove(id: string): Promise<any> {
    const dog = await this.findOne(id);
    await dog.destroy();
    return { dog, message: 'Dog deleted successfully' };
  }
}
