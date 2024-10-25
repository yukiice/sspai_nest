import { ConfigType, registerAs } from '@nestjs/config'

export const mailerRegToken = 'mailer'

export const MailerConfig = registerAs(mailerRegToken, () => ({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  ignoreTLS: true,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
}))

export type IMailerConfig = ConfigType<typeof MailerConfig>
