import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from "./module/db/db.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 使配置全局可用
    }),
    DbModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
