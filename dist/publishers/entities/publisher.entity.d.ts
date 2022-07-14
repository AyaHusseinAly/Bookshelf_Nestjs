import { Book } from 'src/books/books/books.entity';
export declare class Publisher {
    id: number;
    name: string;
    address: string;
    phone: string;
    books: Book[];
}
