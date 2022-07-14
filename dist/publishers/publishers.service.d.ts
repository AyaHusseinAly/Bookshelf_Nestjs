import { Repository } from 'typeorm';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { Publisher } from './entities/publisher.entity';
export declare class PublishersService {
    private publisherRepository;
    constructor(publisherRepository: Repository<Publisher>);
    findAll(): Promise<Publisher[]>;
    create(createPublisherDto: CreatePublisherDto): string;
    findOne(id: number): string;
    update(id: number, updatePublisherDto: UpdatePublisherDto): string;
    remove(id: number): string;
}
