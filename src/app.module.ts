import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotesModule } from './quotes/quotes.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,  // dùng biến môi trường
      autoLoadEntities: true,
      synchronize: false, // chỉ bật khi dev
      ssl: {
        rejectUnauthorized: false,   // Render yêu cầu SSL
      },
    }),
    TagsModule, QuotesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
