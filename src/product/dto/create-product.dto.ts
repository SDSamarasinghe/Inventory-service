/* eslint-disable prettier/prettier */

export class CreateProductDto {
    readonly name: string;
    readonly description: string;
    readonly imageURL: string;
    readonly price: number;
    readonly createdAt: Date;
    readonly buyPrice: number;
    readonly category: string;
    readonly stockCount: number;
}