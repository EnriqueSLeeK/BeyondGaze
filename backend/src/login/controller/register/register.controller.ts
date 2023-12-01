import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from 'src/login/dto/user.dto';
import { User } from 'src/login/entity/user.entity';
import { RegisterService } from 'src/login/service/register/register.service';

@Controller('register')
export class RegisterController {

	constructor(private readonly registerService: RegisterService) {}

	@Get()
	async returnDummy(): Promise<User> {
		const new_user: CreateUser =  {
			name: 'a',
			password: "aaaaaaaaaaaaaas",
			secondName: "something",
			nickname: "panckage",
			email: "email@a.com",
		}
		const user = this.registerService.createUser(new_user);
		return user;
	}

	@Post()
	async registerUser(@Body() userRegistrationData: CreateUser) {
		return "registered";
	}
}
