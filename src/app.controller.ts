import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { renderToBuffer, renderToStream } from '@react-pdf/renderer';
import { TestPdf } from './TestPdf';
import { cloneElement } from 'react';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    for (let i = 0; i < 20; i++) {
      // All of these generate the same error
      renderToBuffer(TestPdf());
      //renderToBuffer(cloneElement(TestPdf()));
      //renderToStream(TestPdf());
    }
    return 'ok';
  }
}
