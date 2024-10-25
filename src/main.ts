import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from "@nestjs/common";
import { LoadSwagger } from "./utils";

async function bootstrap() {
  const app:INestApplication = await NestFactory.create(AppModule);
  LoadSwagger(app)
  await app.listen(4000);
}
bootstrap();
