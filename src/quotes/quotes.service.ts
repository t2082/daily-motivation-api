import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from 'src/entities/quote';
import { Repository } from 'typeorm';

@Injectable()
export class QuotesService {
    constructor(
        @InjectRepository(Quote)
        private quotesRepo: Repository<Quote>,
    ) { }

    async getAllQuotes(limit?: number) {
        return this.quotesRepo.find({
            take: limit, // LIMIT in SQL
        });
    }

    async getQuoteById(id: number) {
        const quote = await this.quotesRepo.findOne({ where: { id } });

        if (!quote) {
            throw new NotFoundException(`Quote with ID ${id} not found`);
        }

        return quote;
    }

    async getRandomQuotes(limit: number, tags: string[]) {
        const qb = this.quotesRepo
            .createQueryBuilder('quote')
            .orderBy('RANDOM()') // use RAND() if MySQL
            .take(limit);

        if (tags.length > 0) {
            qb.leftJoin('quote.tags', 'tag')
                .where('tag.slug IN (:...tags)', { tags });
        }

        return qb.getMany();
    }


    async getQuotesByTag(slug: string) {
        return this.quotesRepo
            .createQueryBuilder('quote')
            .leftJoinAndSelect('quote.tags', 'tag') // assumes relation `tags`
            .where('tag.slug = :slug', { slug })
            .getMany();
    }

    async getQuotesByAuthor(author: string) {
        return this.quotesRepo.find({
            where: { author },
        });
    }
}
