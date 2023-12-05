import { Body, Controller, Get, NotFoundException, Param, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { LoginUser, RecoverUser } from 'src/login/dto/user.dto';
import { AuthService } from 'src/auth/auth.service';
import { Request, Response } from 'express';
import { LoginService } from 'src/login/service/login/login.service';
import { MailService } from 'src/mail/service/mail/mail.service';

@Controller('login')
export class LoginController {

	constructor (private readonly authService: AuthService,
				private readonly loginService: LoginService,
				private readonly mailService: MailService) {}

	@Get('user')
	async loggedUser(@Req() request: Request): Promise<any> {
		try  {
			const cookie = request.cookies['jwt'];
			const data = await this.authService.verifyCookie(cookie);

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

		const jwt_token = await this.authService.login(userData);
		response.cookie('jwt', jwt_token, {httpOnly: true});

		return {
			access_token: jwt_token
		};
	}

	@Post("logout")
	async logoutUser(@Res({passthrough: true}) response: Response) {

		response.clearCookie('jwt');

		return {
			message: 'success'
		};
	}
	
	@Post('recover')
	async forgotReqPassword(@Body() recoverUserInfo: RecoverUser) {
		const user = this.loginService.findUserByEmail(recoverUserInfo.email);
		if (!user)
			throw new NotFoundException('user not found');

		//const token = generateToken();
		this.mailService.mail_send(recoverUserInfo.email, token);
	}

	@Post(':req_id')
	async changePassword(@Param('req_id') reset_id: string) {
		return 'changing password';
	}
}
