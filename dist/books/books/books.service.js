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
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const books_entity_1 = require("./books.entity");
let BooksService = class BooksService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async findAll() {
        return await this.bookRepository.find();
    }
    async authorBooks(id) {
        return await this.bookRepository.find({
            relations: {
                author: true,
            },
            where: {
                author: {
                    id: id,
                },
            },
        });
    }
    async publisherBooks(id) {
        return await this.bookRepository.find({
            relations: {
                publisher: true,
            },
            where: {
                publisher: {
                    id: id,
                },
            },
        });
    }
};
BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(books_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map