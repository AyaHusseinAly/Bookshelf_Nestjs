"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const publisher_entity_1 = require("./entities/publisher.entity");
let PublishersService = class PublishersService {
    constructor(publisherRepository) {
        this.publisherRepository = publisherRepository;
    }
    async findAll() {
        return await this.publisherRepository.find();
    }
    create(createPublisherDto) {
        return 'This action adds a new publisher';
    }
    findOne(id) {
        return `This action returns a #${id} publisher`;
    }
    update(id, updatePublisherDto) {
        return `This action updates a #${id} publisher`;
    }
    remove(id) {
        return `This action removes a #${id} publisher`;
    }
};
PublishersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(publisher_entity_1.Publisher)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PublishersService);
exports.PublishersService = PublishersService;
//# sourceMappingURL=publishers.service.js.map