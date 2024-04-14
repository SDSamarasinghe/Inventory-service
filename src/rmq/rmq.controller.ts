import { Controller, Get, Param } from '@nestjs/common';
import { RmqService } from './rmq.service';
import * as amqp from 'amqplib';

@Controller('rmq')
export class RmqController {
  constructor(private readonly rmqService: RmqService) {}

  @Get(':queue')
  async getOptions(@Param('queue') queue: string) {
    const options = await this.rmqService.getOptions(queue);

    const connection = await amqp.connect(options.options.urls);
    const channel = await connection.createChannel();

    const message = 'Hello, RabbitMQ!';
    channel.sendToQueue(queue, Buffer.from(message));

    await channel.close();
    await connection.close();

    return options;
  }
}
