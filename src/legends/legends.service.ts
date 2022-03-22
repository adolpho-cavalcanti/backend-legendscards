import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Legend } from './interfaces/legends/legend.interface';

@Injectable()
export class LegendsService {

    constructor(
        @InjectModel('Legend') private readonly legendModel: Model<Legend>
    ){}

    private readonly logger = new Logger(LegendsService.name);

    getHello(): string {
      return 'Bora Nest.js';
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
