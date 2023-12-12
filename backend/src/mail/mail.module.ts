import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { MailService } from './service/mail/mail.service';

@Module({
	imports: [MailerModule.forRootAsync({
		useFactory: () => ({
			transport: {
				host: process.env.SMTP_SERVER,
				auth: {
					user: process.env.MAIL,
					pass: process.env.PASS,
				}
			},

			defaults: { from: '"nest-modules" <modules@nestjs.com>',},

			template: {
				dir: __dirname + '/templates',
				adapter: new PugAdapter(),
				options: {
					strict: true,
				},
			},
		}),
	}),
	],
	providers: [MailService],
})
export class MailModule {}
