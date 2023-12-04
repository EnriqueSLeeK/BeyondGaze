import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginModule } from 'src/login/login.module';
import { JwtModule } from '@nestjs/jwt';
import { LoginService } from 'src/login/service/login/login.service';
import { HashService } from 'src/login/service/hash/hash.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/login/entity/user.entity';

@Module({
	imports: [
		LoginModule,
		TypeOrmModule.forFeature([User]),
		JwtModule.register({
			global: true,
			secret: process.env.SECRET,
			signOptions: { expiresIn: "3 days" }
		})],
	controllers: [AuthController],
	providers: [AuthService, LoginService, HashService],
	exports: [AuthService],
})
export class AuthModule {}
