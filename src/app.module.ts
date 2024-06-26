import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { config } from 'dotenv';
import { RmqModule } from './rmq/rmq.module';
config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    RmqModule,
    ProductModule,
    ClientsModule.register([
      {
        name: 'INVENTORY_MICROSERVICE',
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
