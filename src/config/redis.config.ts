import { ConfigType, registerAs } from '@nestjs/config'
export const redisRegToken = 'redis'

export const RedisConfig = registerAs(redisRegToken, () => ({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
  db: process.env.REDIS_DB,
}))

export type IRedisConfig = ConfigType<typeof RedisConfig>
