import { Book } from './books.entity';
import { BooksService } from './books.service';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    index(): Promise<Book[]>;
    findAuthorBooks(id: any): Promise<Book[]>;
    findPublisherBooks(id: any): Promise<Book[]>;
}
