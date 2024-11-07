import { DatabaseConfig, IDatabaseConfig,dbRegToken} from "./database.config";
import { IMailerConfig, MailerConfig,mailerRegToken} from "./mailer.config";
import { ISwaggerConfig, SwaggerConfig,swaggerRegToken} from "./swagger.config";

export interface AllConfigType {
  [dbRegToken]: IDatabaseConfig
  [mailerRegToken]: IMailerConfig
  [swaggerRegToken]: ISwaggerConfig
}

export type ConfigKeyPaths = RecordNamePaths<AllConfigType>

export default {
  DatabaseConfig,
  MailerConfig,
  SwaggerConfig,
}