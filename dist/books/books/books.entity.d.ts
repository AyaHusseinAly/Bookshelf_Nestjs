import { Author } from 'src/authors/entities/author.entity';
import { Publisher } from 'src/publishers/entities/publisher.entity';
export declare class Book {
    id: number;
    name: string;
    isnb: string;
    author: Author;
    year: string;
    publisher: Publisher;
    category: string;
}
