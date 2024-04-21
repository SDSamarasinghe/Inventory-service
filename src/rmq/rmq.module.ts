import { Module } from '@nestjs/common';
import { RmqService } from './rmq.service';
import { RmqController } from './rmq.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [RmqService, ConfigService],
  controllers: [RmqController],
})
export class RmqModule {}
