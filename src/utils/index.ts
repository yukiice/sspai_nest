import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const LoadSwagger = (app:INestApplication)=>{
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const customOptions = {
    customSiteTitle: 'API 文档',
    customCss: `
       /* 在这里添加自定义的CSS样式 */
       .swagger-ui .topbar { background-color: #343a40; color: white; }
       .swagger-ui .topbar a { color: white; }
       .swagger-ui .opblock-summary-operation { background-color: #f8f9fa; }
       .swagger-ui .opblock-summary-method { color: #007bff; }
     `
  }
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document,customOptions);
}