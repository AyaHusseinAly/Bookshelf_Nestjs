import { PublishersService } from './publishers.service';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
export declare class PublishersController {
    private readonly publishersService;
    constructor(publishersService: PublishersService);
    findAll(): Promise<import("./entities/publisher.entity").Publisher[]>;
    findOne(id: string): string;
    create(createPublisherDto: CreatePublisherDto): string;
    update(id: string, updatePublisherDto: UpdatePublisherDto): string;
    remove(id: string): string;
}
