import { Controller, Get, Param } from '@nestjs/common';
import { LegendsService } from './legends.service';
import { Legend } from './interfaces/legends/legend.interface';

@Controller()
export class LegendsController {
    constructor(
        private readonly appService: LegendsService
    ) {}

    @Get()
    getHello(): string {
      return this.appService.getHello();
    }
  
    @Get('legends')
    listLegend(): Promise<Legend[]> {
      return this.appService.listLegend();
    }
  
    @Get('legends/:id')
    listLegendForId(@Param('id') _id: string): Promise<Legend> {
      return this.appService.listLegendForId(_id);
    }

}
