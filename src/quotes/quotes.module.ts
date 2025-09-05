import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { Quote } from 'src/entities/quote';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Quote])],
  providers: [QuotesService],
  controllers: [QuotesController]
})
export class QuotesModule {}
