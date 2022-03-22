import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LegendsModule } from './legends/legends.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.rpbqu.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
      },
    ),
    LegendsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
