import { Schema } from 'mongoose';

export const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    imageURL: String,
    price: Number,
    buyPrice: Number,
    category: String,
    stockCount: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
