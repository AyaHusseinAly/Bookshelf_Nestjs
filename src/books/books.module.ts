import { Module } from '@nestjs/common';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';
import {Book} from './books/books.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
  ],
  providers: [BooksService],
  controllers: [BooksController]
})
export class BooksModule {}
