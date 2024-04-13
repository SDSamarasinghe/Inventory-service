import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  MicroserviceOptions,
  Transport,
  ClientProxy,
  ClientProxyFactory,
} from '@nestjs/microservices';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const microserviceOptions: MicroserviceOptions = {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBIT_MQ_URI],
      queue: process.env.RABBIT_MQ_QUEUE,
    },
  };

  const client: ClientProxy = ClientProxyFactory.create(microserviceOptions);

  client.emit<any>('message_pattern', 'Hello RabbitMQ!');

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
