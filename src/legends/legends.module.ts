import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LegendSchema } from './interfaces/legends/legend.schema';
import { LegendsController } from './legends.controller';
import { LegendsService } from './legends.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Legend', schema: LegendSchema}]),
    ],
    controllers: [LegendsController],
    providers: [LegendsService],
})
export class LegendsModule {}