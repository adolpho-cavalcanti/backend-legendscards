require('dotenv').config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({credentials: true, origin: "http://localhost:3000"});
  const port = 8080;
  await app.listen(port);
  console.log(`App Legend running: ${port}`);
}
bootstrap();
