import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLegendDto } from './dtos/create-legend.dto';
import { Legend } from './interfaces/legend.interface';

@Injectable()
export class LegendsService {

    constructor(
        @InjectModel('Legend') private readonly legendModel: Model<Legend>
    ){}

    private readonly logger = new Logger(LegendsService.name);

    async createLegend(createLegendDto: CreateLegendDto): Promise<Legend>{
      try {
        const legendCreated = new this.legendModel(createLegendDto);
        return await legendCreated.save();
      } catch (error) {
        throw new NotFoundException(error.message);
      }
    }
  
    async listLegend(): Promise<Legend[]>{
      try {
        return await this.legendModel.find().exec();
      } catch (error) {
        throw new NotFoundException(error.message);
      }
    }
  
    async listLegendForId(_id: string): Promise<Legend>{
      try {
        return await this.legendModel.findOne({_id}).exec();
      } catch (error) {
        throw new NotFoundException(error.message);
      }
    }

}
