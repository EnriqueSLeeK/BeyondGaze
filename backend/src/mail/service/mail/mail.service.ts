import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
	constructor (private readonly mailerService: MailerService) {}

	public mail_send(email: string,
					token: string): void {
		this.mailerService.sendMail({
			to: email,
			from: 'noreply@space.com',
			subject: 'Password Recovery',
			text: 'Please the click the link below',
			html: '<b>pass change</b>',
		})
	}
}
