
import { IsEmail,
	IsNotEmpty,
	Length } from 'class-validator'

export class CreateUser {
	@IsNotEmpty()
	name: string;

	@IsNotEmpty()
	secondName: string;

	@IsNotEmpty()
	@Length(8)
	password: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	nickname: string;
}

export class UpdateUser {
	name: string;
	secondName: string;
	password: string;
	email: string;
	nickname: string;
}
