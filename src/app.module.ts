import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagController } from './controller/tags/tag.controller';
import { QuoteController } from './controller/quotes/quote.controller';

@Module({
  imports: [],
  controllers: [TagController, QuoteController],
  providers: [],
})
export class AppModule { }
