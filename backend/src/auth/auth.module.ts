import { Module } from '@nestjs/common';
import { LoginService } from './service/login/login.service';
import { RegisterService } from './service/register/register.service';
import { LoginController } from './controller/login/login.controller';
import { RegisterController } from './controller/register/register.controller';

@Module({
  controllers: [RegisterController, LoginController],
  providers: [LoginService, RegisterService]
})
export class AuthModule {}
