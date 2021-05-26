import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // Api from https://messari.io/account/api
  // Api docs: https://messari.io/api/docs

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
