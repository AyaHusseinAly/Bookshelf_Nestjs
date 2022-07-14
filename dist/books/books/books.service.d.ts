import { Repository } from 'typeorm';
import { Book } from './books.entity';
export declare class BooksService {
    private bookRepository;
    constructor(bookRepository: Repository<Book>);
    findAll(): Promise<Book[]>;
    authorBooks(id: any): Promise<Book[]>;
    publisherBooks(id: any): Promise<Book[]>;
}
