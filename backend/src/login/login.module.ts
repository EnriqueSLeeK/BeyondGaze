import { Module } from '@nestjs/common';
import { LoginService } from './service/login/login.service';
import { RegisterService } from './service/register/register.service';
import { LoginController } from './controller/login/login.controller';
import { RegisterController } from './controller/register/register.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { HashService } from './service/hash/hash.service';
import { AuthService } from 'src/auth/auth.service';
import { MailService } from 'src/mail/service/mail/mail.service';

@Module({
	imports: [TypeOrmModule.forFeature([User])],

	providers: [LoginService,
		RegisterService,
		HashService,
		AuthService,
		MailService],

	controllers: [LoginController,
		RegisterController]
})
export class LoginModule {}
