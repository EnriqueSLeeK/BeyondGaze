import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { LoginUser, RecoverUser } from 'src/login/dto/user.dto';
import { LoginService } from 'src/login/service/login/login.service';
import { User } from 'src/login/entity/user.entity';
import { HashService } from 'src/login/service/hash/hash.service';
import { AuthService } from 'src/auth/auth.service';

@Controller('login')
export class LoginController {

	constructor (private readonly authService: AuthService) {}

	@Get()
	async returnDummy() {
		return "User endpoint";
	}

	@Post()
	async loginUser(@Body() userData: LoginUser): Promise<User> {
		return this.authService.login(userData);
	}
	
	@Post()
	async forgotReqPassword(@Body() recoverUserInfo: RecoverUser) {
		console.log(recoverUserInfo);
		return "User forgot pass";
	}

	@Post()
	async changePassword(@Body() password: string) {
		console.log(password);
		return 'changing password';
	}
}
