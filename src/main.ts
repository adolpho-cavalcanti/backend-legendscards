require('dotenv').config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 8081;
  await app.listen(port);
  console.log(`App running on PORT: ${port}`);
}
bootstrap();
