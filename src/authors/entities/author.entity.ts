import { Book } from 'src/books/books/books.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    birthdate: Date;

    @Column()
    photo: string;


    @OneToMany(() => Book, (book) => book.author)
    books: Book[]

}