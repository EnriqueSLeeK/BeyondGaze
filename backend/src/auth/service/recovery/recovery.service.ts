import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TokenRecovery } from 'src/entity/token_auth.entity';
import { Repository } from 'typeorm';
import { LoginService } from 'src/login/service/login/login.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RecoveryService {

	constructor (
		@InjectRepository(TokenRecovery) private readonly tokenRepository: Repository<TokenRecovery>,
		@Inject(LoginService) private readonly userService: LoginService,
		@Inject(JwtService) private readonly jwtService: JwtService,
	)
	{}

	createToken(email: string): string {
		return this.jwtService.sign({email: email});
	}

	verifyToken(token: string): any {
		return this.jwtService.verify(token);
	}

	async createTokenEntry(email: string, token: string): Promise<boolean> {
		const user = await this.userService.findUserByEmail(email)

		if (!user)
			throw new UnauthorizedException('Email not found');

		let entry = this.tokenRepository.create();
		entry.token = token;
		entry.email = email;
		this.tokenRepository.insert(entry);
		return true;
	}

	async findToken(token: string): Promise<TokenRecovery> {
		let foundToken = await this.tokenRepository.findOne({where: {token: token}});
		if (!foundToken)
			return null;
		return foundToken;
	}

	async updateStatus(recoveryTokenEntry: TokenRecovery): Promise<boolean> {
		if (!recoveryTokenEntry)
			return false;

		this.tokenRepository.update({token_id: recoveryTokenEntry.token_id},
									{valid: false});
		return true;
	}
}
