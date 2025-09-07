import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
    constructor(private readonly quoteService: QuotesService) { }

    // GET /quotes
    // GET /quotes?limit=10
    @Get()
    getAllQuotes(@Query('limit') limit?: number) {
        return this.quoteService.getAllQuotes(limit);
    }

    @Get('random')
    getRandomQuotes(@Query('tags') tags?: string, @Query('limit') limit?: number) {
        const tagList = tags ? tags.split('|') : [];
    return this.quoteService.getRandomQuotes(limit!, tagList);
    }

    @Get(':id')
    getQuoteById(@Param('id', ParseIntPipe) id: number) {
        return this.quoteService.getQuoteById(id);
    }

    // /quotes/by-tag/:slug
    @Get('by-tag/:slug')
    getByTag(@Param('slug') slug: string) {
        return this.quoteService.getQuotesByTag(slug);
    }

    // /quotes/by-author/:author
    @Get('by-author/:author')
    getByAuthor(@Param('author') author: string) {
        return this.quoteService.getQuotesByAuthor(author);
    }

}
