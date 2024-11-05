import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from "./module/db/db.module";
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core'
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./module/user/user.module";
import { ClassSerializerInterceptor } from '@nestjs/common'
import { TransformInterceptor } from "./common/interceptors/transform.Interceptor";
import { TimeoutInterceptor } from "./common/interceptors/timeout.interceptor";
import { AllExceptionsFilter } from "./common/filters/anyException.filter";
import { AppService } from "./app.service";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 使配置全局可用
    }),
    DbModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: APP_INTERCEPTOR, useClass: ClassSerializerInterceptor },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_INTERCEPTOR, useFactory: () => new TimeoutInterceptor(15 * 1000) }
  ],
})
export class AppModule {}
