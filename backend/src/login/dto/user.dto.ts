
import { IsNotEmpty, Length } from 'class-validator'

export class CreateUser {
	@IsNotEmpty()
	name: string;

	@IsNotEmpty()
	secondName: string;

	@IsNotEmpty()
	@Length(8)
	password: string;

	@IsNotEmpty()
	email: string;

	@IsNotEmpty()
	nickname: string;
}

export class UpdateUser {
	name: string;
	secondName: string;
}

export class UpdatePassword {
}

export class UpdateEmail {
}

export class DeleteUser {
}
