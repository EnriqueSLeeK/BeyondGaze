import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@Injectable()
export class HashService {

	async hashPassword(plainPassword: string, round: number): Promise<string> {
		return bcrypt.hash(plainPassword, round);
	}

	async comparePassword(plainPassword: string, hash: string): Promise<boolean> {
		return bcrypt.compare(plainPassword, hash);
	}
}
