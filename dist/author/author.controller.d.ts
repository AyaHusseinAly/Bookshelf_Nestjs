import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    create(createAuthorDto: CreateAuthorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAuthorDto: UpdateAuthorDto): string;
    remove(id: string): string;
}
