import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { LoginUser } from 'src/login/dto/user.dto';
import { LoginService } from 'src/login/service/login/login.service';
import * as bcrypt from 'bcrypt'
import { User } from 'src/login/entity/user.entity';

@Controller('login')
export class LoginController {

	constructor (private readonly loginService: LoginService) {}

	@Get()
	async returnDummy() {
		return "User endpoint";
	}

	@Post()
	async loginUser(@Body() userData: LoginUser): Promise<User> {
		const user = this.loginService.findUser(userData);

		if (!user || bcrypt.compare(userData.password, user['password']))
			throw new NotFoundException("Incorrect email or password") 
		return user;
	}
	
	@Post()
	async forgotPassword(@Body() email: string) {
		return "User forgot pass";
	}
}
