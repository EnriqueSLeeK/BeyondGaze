import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUser } from 'src/login/dto/user.dto';
import { HashService } from 'src/login/service/hash/hash.service';
import { LoginService } from 'src/login/service/login/login.service';

@Injectable()
export class AuthService {

	constructor (private readonly loginService: LoginService,
				private readonly hashService: HashService,
				private jwtService: JwtService) {}

	async login(userData: LoginUser): Promise<any> {
		const user = await this.loginService.findUser(userData);

		if (!user
			|| this.hashService.comparePassword(userData.password,
												user.password)) {
			throw new UnauthorizedException()
		}

		const payload = {sub: user.userId, username: user.nickname};

		return {
			access_token: await this.jwtService.signAsync(payload)
		};
	}

}
