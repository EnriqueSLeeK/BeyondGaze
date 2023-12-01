import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginUser } from 'src/login/dto/user.dto';
import { LoginService } from 'src/login/service/login/login.service';

@Controller('login')
export class LoginController {

	constructor (private readonly loginService: LoginService) {}

	@Get()
	async returnDummy() {
		return "User endpoint";
	}

	@Post()
	async loginUser(@Body() userData: LoginUser) {
		return "User Login";
	}
	
	@Post()
	async forgotPassword(@Body() email: string) {
		return "USer forgot pass";
	}
}
