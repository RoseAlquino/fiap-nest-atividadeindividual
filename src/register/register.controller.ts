import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
	constructor(private readonly registerService: RegisterService) {}

	@Post('login')
	async registerLogin(@Body() req) {
		const {name, email, password, site, phone} = req;
		console.log('Name:', name);
		console.log('Email:', email);
		console.log('Senha:', password);
		console.log('Site:', site);
		console.log('Phone:', phone);
		return `Cliente ${name} cadastrado com sucesso!`;
}
}