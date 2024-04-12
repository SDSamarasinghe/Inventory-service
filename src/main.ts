import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  if (process.env.APP_ENV !== 'production') {
    app.enableCors({
      allowedHeaders: '*',
      origin: '*',
      credentials: true,
    });
  } else {
    app.enableCors({
      allowedHeaders: '*',
      origin: 'http://localhost:4200',
    });
  }
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
