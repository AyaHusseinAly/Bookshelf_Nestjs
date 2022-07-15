"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const books_module_1 = require("./books/books.module");
const typeorm_1 = require("@nestjs/typeorm");
const authors_module_1 = require("./authors/authors.module");
const publishers_module_1 = require("./publishers/publishers.module");
const books_entity_1 = require("./books/books/books.entity");
const author_entity_1 = require("./authors/entities/author.entity");
const publisher_entity_1 = require("./publishers/entities/publisher.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db',
                entities: [books_entity_1.Book, author_entity_1.Author, publisher_entity_1.Publisher],
                synchronize: true,
            }),
            books_module_1.BooksModule,
            authors_module_1.AuthorsModule,
            publishers_module_1.PublishersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map