import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';
export declare class AuthorsService {
    private authorRepository;
    constructor(authorRepository: Repository<Author>);
    findAll(): Promise<Author[]>;
    create(createAuthorDto: CreateAuthorDto): string;
    findOne(id: number): string;
    update(id: number, updateAuthorDto: UpdateAuthorDto): string;
    remove(id: number): string;
}
