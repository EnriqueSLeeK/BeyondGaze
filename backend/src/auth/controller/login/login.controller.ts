import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginUser } from 'src/auth/dto/user.dto';

@Controller('login')
export class LoginController {

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
	}
}
