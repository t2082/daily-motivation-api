import { Controller, Get } from '@nestjs/common';
import { tags } from 'src/data/tags';

@Controller('tags')
export class TagController {
  @Get()
  findAll() {
    return tags;
  }
}