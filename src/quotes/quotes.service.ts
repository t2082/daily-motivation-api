import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from 'src/entities/quote';
import { Repository } from 'typeorm';

@Injectable()
export class QuotesService {
    constructor(
        @InjectRepository(Quote)
        private tagRepository: Repository<Quote>,
    ) { }

    findAll(): Promise<Quote[]> {
        return this.tagRepository.find();
    }
}
