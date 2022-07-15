import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './authors/authors.module';
import { PublishersModule } from './publishers/publishers.module';
import { Book } from './books/books/books.entity';
import { Author } from './authors/entities/author.entity';
import { Publisher } from './publishers/entities/publisher.entity';


@Module({
  imports: [
            TypeOrmModule.forRoot({
  
              type:'sqlite',
              database: 'db',
              entities: [Book, Author, Publisher],
              // entities: [__dirname + '/**/*.entity{.ts,.js}'],

              // type: 'postgres',
              // host: 'localhost',
              // port: 5432,
              // username: 'admin',
              // password: null,
              // database: 'nestjs',
              synchronize: true,
              // entities: [Book, Author, Publisher],
              // // ssl: false,
              // // extra: {
              // //   ssl: {
              // //     rejectUnauthorized: false,
              // //   },
              // // }
            }),
          BooksModule,
          AuthorsModule,
          PublishersModule,
          
          
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
