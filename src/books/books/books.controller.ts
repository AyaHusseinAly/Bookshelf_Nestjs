import { Controller, Get, Param } from '@nestjs/common';
import { Book } from './books.entity';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService){}

    @Get()
    index(): Promise<Book[]> {
      return this.booksService.findAll();
    } 

    @Get('authors/:id')
    findAuthorBooks(@Param('id') id){
      return this.booksService.authorBooks(id);
  
    }

    @Get('publishers/:id')
    findPublisherBooks(@Param('id') id){
      return this.booksService.publisherBooks(id);
  
    }
}
