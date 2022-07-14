import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Book } from 'src/books/books/books.entity';
import { BooksService } from 'src/books/books/books.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Author]),
  ],
  controllers: [AuthorsController],
  providers: [AuthorsService]
})
export class AuthorsModule {}
