import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LoginModule } from 'src/login/login.module';
import { JwtModule } from '@nestjs/jwt';
import { LoginService } from 'src/login/service/login/login.service';
import { HashService } from 'src/login/service/hash/hash.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { AuthService } from './service/auth/auth.service';
import { RecoveryService } from './service/recovery/recovery.service';
import { TokenRecovery } from 'src/entity/token_auth.entity';

@Module({
	imports: [
		LoginModule,
		TypeOrmModule.forFeature([User, TokenRecovery]),
		JwtModule.register({
			global: true,
			secret: process.env.SECRET,
			signOptions: { expiresIn: "3 days" }
		})],
	controllers: [AuthController],
	providers: [AuthService, LoginService, HashService, RecoveryService],
	exports: [AuthService],
})
export class AuthModule {}
