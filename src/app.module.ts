import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsModule } from './authors/authors.module';
import { PublishersModule } from './publishers/publishers.module';


@Module({
  imports: [
            TypeOrmModule.forRoot({
              type: 'postgres',
              host: '127.0.0.1',
              port: 5432,
              username: 'admin',
              password: 'admin',
              database: 'nestjs',
              synchronize: true,
              entities: ['src/**/*.entity{.ts,.js}'],
              migrations: ['./src/migrations/*.ts'],
              // ssl: false,
              // extra: {
              //   ssl: {
              //     rejectUnauthorized: false,
              //   },
              // }
            }),
          BooksModule,
          AuthorsModule,
          PublishersModule,
          
          
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
