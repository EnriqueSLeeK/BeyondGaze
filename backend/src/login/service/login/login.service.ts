import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUser } from 'src/dto/user.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm'

@Injectable()
export class LoginService {

	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	async findUser (user : LoginUser ): Promise<User | undefined> {
		return await this.findUserByEmail(user.email);
	}

	async findUserByEmail (user_email: string): Promise<User | undefined> {
		return await this.userRepository.findOne({where: {email: user_email}});
	}

	async findUserById (id: string): Promise<User | undefined> {
		return await this.userRepository.findOne({where: {userId: id}});
	}

	async updatePassword(new_password: string, email: string) {
		this.userRepository.update({email: email},
								   {password: new_password});
	}
}
