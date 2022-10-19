import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Este es el código que arranca la aplicación 
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
