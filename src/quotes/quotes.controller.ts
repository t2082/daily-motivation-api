import { Controller, Get } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
    constructor(private readonly quoteService: QuotesService) { }

    @Get()
    findAll() {
        return this.quoteService.findAll();
    }
}
