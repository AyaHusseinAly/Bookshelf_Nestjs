import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
export declare class AuthorService {
    create(createAuthorDto: CreateAuthorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthorDto: UpdateAuthorDto): string;
    remove(id: number): string;
}
