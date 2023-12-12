import { Body, Controller, Get, NotFoundException, Param, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { LoginUser, RecoverUser } from 'src/dto/user.dto';
import { Request, Response } from 'express';
import { LoginService } from 'src/login/service/login/login.service';
import { MailService } from 'src/mail/service/mail/mail.service';
import { AuthService } from 'src/auth/service/auth/auth.service';
import { RecoveryService } from 'src/auth/service/recovery/recovery.service';

@Controller('login')
export class LoginController {

	constructor (private readonly authService: AuthService,
				private readonly loginService: LoginService,
				private readonly mailService: MailService,
				private readonly recoveryService: RecoveryService) {}

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

		const token = this.recoveryService.createToken(recoverUserInfo.email);
		this.recoveryService.createTokenEntry(recoverUserInfo.email, token);
		this.mailService.mail_send(recoverUserInfo.email, token);
	}

	@Post(':req_id')
	async changePassword(@Param('req_id') reset_id: string,
						@Body('password') new_password: string) {
		let token = await this.recoveryService.findToken(reset_id);

		if (!token || token.valid === false)
			throw new UnauthorizedException('Token not found');

		try {
			this.recoveryService.updateStatus(token);
			let data = this.recoveryService.verifyToken(reset_id);
			this.loginService.updatePassword(new_password, data.email);
		} catch (e) {
			throw new UnauthorizedException('Token Expired!');
		}
	}
}
