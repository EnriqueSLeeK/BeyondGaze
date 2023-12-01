import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from 'src/login/dto/user.dto';

@Controller('register')
export class RegisterController {

	@Get()
	async returnDummy() {
		return "woah registration"
	}

	@Post()
	async registerUser(@Body() userRegistrationData: CreateUser) {
		return "registered";
	}
}
