import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { LegendsService } from './legends.service';
import { Legend } from './interfaces/legend.interface';
import { AuthGuard } from '@nestjs/passport';
import { CreateLegendDto } from './dtos/create-legend.dto';

@Controller('api/v1/legends')
export class LegendsController {
    constructor(
        private readonly appService: LegendsService
    ) {}
    
    @UseGuards(AuthGuard('jwt'))
    @Post('/')
    createLegend(
      @Body() createLegendDto: CreateLegendDto
    ): Promise<Legend>{
      return this.appService.createLegend(createLegendDto);
    }
  
    @Get('/')
    listLegend(): Promise<Legend[]> {
      return this.appService.listLegend();
    }
  
    @Get('/:id')
    listLegendForId(@Param('id') _id: string): Promise<Legend> {
      return this.appService.listLegendForId(_id);
    }

}
