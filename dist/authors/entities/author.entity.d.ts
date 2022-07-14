import { Book } from 'src/books/books/books.entity';
export declare class Author {
    id: number;
    name: string;
    surname: string;
    birthdate: Date;
    photo: string;
    books: Book[];
}
