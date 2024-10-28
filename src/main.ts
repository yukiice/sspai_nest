import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from "./setupSwagger";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // swagger init
  setupSwagger(app);
  await app.listen(process.env.RUNNING_PORT);
}
bootstrap().catch()