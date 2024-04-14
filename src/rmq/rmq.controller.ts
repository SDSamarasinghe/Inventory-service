import { Controller, Get, Param } from '@nestjs/common';
import { RmqService } from './rmq.service';

@Controller('rmq')
export class RmqController {
  constructor(private readonly rmqService: RmqService) {}

  @Get(':queue')
  getOptions(@Param('queue') queue: string) {
    const options = this.rmqService.getOptions(queue);
    return options;
  }
}
