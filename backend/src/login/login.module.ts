import { Module } from '@nestjs/common';
import { LoginService } from './service/login/login.service';
import { RegisterService } from './service/register/register.service';
import { LoginController } from './controller/login/login.controller';
import { RegisterController } from './controller/register/register.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { HashService } from './service/hash/hash.service';
import { MailService } from 'src/mail/service/mail/mail.service';
import { AuthService } from 'src/auth/service/auth/auth.service';
import { RecoveryService } from 'src/auth/service/recovery/recovery.service';
import { TokenRecovery } from 'src/entity/token_auth.entity';

@Module({
	imports: [TypeOrmModule.forFeature([User, TokenRecovery])],

	providers: [LoginService,
		RegisterService,
		HashService,
		AuthService,
		MailService,
		RecoveryService,
	],

	controllers: [LoginController,
		RegisterController]
})
export class LoginModule {}
