import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
export declare class AuthorsController {
    private authorsService;
    constructor(authorsService: AuthorsService);
    create(createAuthorDto: CreateAuthorDto): string;
    findAll(): Promise<import("./entities/author.entity").Author[]>;
    findOne(id: string): string;
    update(id: string, updateAuthorDto: UpdateAuthorDto): string;
    remove(id: string): string;
}
