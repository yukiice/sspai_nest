import { INestApplication, Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export function setupSwagger(
  app: INestApplication
): void {
  const documentBuilder = new DocumentBuilder()
    .setTitle('')
    .setDescription(`${''} API document`)
    .setVersion('1.0')

  const document = SwaggerModule.createDocument(app, documentBuilder.build(), {
    ignoreGlobalPrefix: false
  })

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // 保持登录
    },
  })

  // started log
  const logger = new Logger('SwaggerModule')
  logger.log(`Document running on http://127.0.0.1:${process.env.RUNNING_PORT}/${'api'}`)
}