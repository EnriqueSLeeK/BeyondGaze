import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

	@UseGuards(AuthGuard)
	@Get()
	guard_test(): string {
		return "Guard test!";
	}
}
