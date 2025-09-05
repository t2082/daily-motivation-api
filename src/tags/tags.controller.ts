import { Controller, Get } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagService: TagsService) {}

  @Get()
  findAll() {
    return this.tagService.findAll();
  }
}
