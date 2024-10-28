import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from "./module/test/test.module";
import { HomeModule } from './module/home/home.module';
import { DbModule } from "./module/db/db.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 使配置全局可用
    }),
    TestModule,
    HomeModule,
    DbModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
