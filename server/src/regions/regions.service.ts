import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Regions } from 'output/entities/Regions';
import { Repository } from 'typeorm';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(Regions) private serviceReg: Repository<Regions>,
  ) {}

  public async findAll() {
    return await this.serviceReg.find({
      relations: {
        countries: true,
      },
    });
  }
  public async findOne(ids: number) {
    return await this.serviceReg.findOne({ where: { regionId: ids } });
  }

  public async Insert(name: string) {
    try {
      const region = await this.serviceReg.save({
        regionName: name,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }
  public async update(id: number, name: string) {
    try {
      const region = await this.serviceReg.update(id, {
        regionName: name,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }

  public async Delete(id: number) {
    return await this.serviceReg.delete(id);
  }

  public async Upload(file, name: string) {
    try {
      const region = await this.serviceReg.save({
        regionName: name,
        photo: file.originalname,
      });
      return region;
    } catch (error) {
      return error.message;
    }
  }
}
