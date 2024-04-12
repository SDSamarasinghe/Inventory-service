import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  imageURL: string;

  @Prop()
  price: number;

  @Prop()
  buyPrice: number;

  @Prop()
  category: string;

  @Prop()
  stockCount: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
