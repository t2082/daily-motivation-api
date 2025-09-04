// src/quote/quote.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { quotes } from 'src/data/quotes';

@Controller('quotes')
export class QuoteController {
  @Get()
  findAll() {
    return quotes;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const quote = quotes.find((q) => q.id === parseInt(id));
    if (!quote) {
      return { message: 'Quote not found' };
    }
    return quote;
  }
}
