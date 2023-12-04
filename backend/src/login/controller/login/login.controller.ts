import { Body, Controller, Get, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { LoginUser, RecoverUser } from 'src/login/dto/user.dto';
import { AuthService } from 'src/auth/auth.service';
import { Request, Response } from 'express';
import { LoginService } from 'src/login/service/login/login.service';

@Controller('login')
export class LoginController {

	constructor (private readonly authService: AuthService,
				private readonly loginService: LoginService) {}

	@Get()
	async returnDummy() {
		return "User endpoint";
	}

	@Get('user')
	async loggedUser(@Req() request: Request): Promise<any> {
		try  {
			const cookie = request.cookies['jwt'];
			const data = await this.authService.verifyCookie(cookie);

			console.log(data);
			const user = await this.loginService.findUser(data);
			const {password, ...result} = user;

			return result;

		} catch (e) {
			throw new UnauthorizedException();
		}
	}

	@Post()
	async loginUser(@Body() userData: LoginUser,
				   @Res({passthrough: true}) response: Response) {

		const jwt_login = await this.authService.login(userData);
		response.cookie('jwt', jwt_login, {httpOnly: true});

		return {
			message: 'Success'
		};
	}
	
	@Post()
	async forgotReqPassword(@Body() recoverUserInfo: RecoverUser) {
		return "User forgot pass";
	}

	@Post()
	async changePassword(@Body() password: string) {
		return 'changing password';
	}
}
