import { ConfigType, registerAs } from '@nestjs/config'


export const swaggerRegToken = 'swagger'

export const SwaggerConfig = registerAs(swaggerRegToken, () => ({
  enable: process.env.SWAGGER_ENABLE,
  path: process.env.SWAGGER_PATH,
}))

export type ISwaggerConfig = ConfigType<typeof SwaggerConfig>
