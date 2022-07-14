import { Author } from 'src/authors/entities/author.entity';
import { Publisher } from 'src/publishers/entities/publisher.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    isnb: string;

    @ManyToOne(() => Author, (author) => author.books)
    author: Author

    @Column()
    year: string;

    @ManyToOne(() => Publisher, (publisher) => publisher.books)
    publisher: Publisher

    @Column()
    category: string;
}