import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { LegendsModule } from './legends/legends.module';
import { AuthModule } from './auth/auth.module';
import { AwsModule } from './aws/aws.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.rpbqu.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
      },
    ),
    LegendsModule,
    AuthModule,
    AwsModule,
    ConfigModule.forRoot()
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
