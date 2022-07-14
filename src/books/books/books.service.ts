import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
    ) { }

    async  findAll(): Promise<Book[]> {
        return await this.bookRepository.find();
    }

    async authorBooks(id): Promise<Book[]>{
        return await this.bookRepository.find({
            relations: {
                author: true,
            },
            where: {
                author: {
                    id: id,
                },
            },
        });
    
    }

    async publisherBooks(id): Promise<Book[]>{
        return await this.bookRepository.find({
            relations: {
                publisher: true,
            },
            where: {
                publisher: {
                    id: id,
                },
            },
        });
    
    }
}
