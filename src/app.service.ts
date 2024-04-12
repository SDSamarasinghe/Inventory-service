import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <br><br><br>
      <div style="text-align:center;">
      <h1>Server running ok</h1>
      <a href="/product">Products</a>
      </div>
    `;
  }
}
