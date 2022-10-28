import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
	

	async registerLogin(name: string, email: string, password: string, site: string, phone: string) {
		console.log('No Service - Name:', name);
		console.log('No Service - Email:', email);
		console.log('No Service - Senha:', password);
		console.log('No Service - Site:', site);
		console.log('No Service - Phone:', phone);
		return {name, email, password, site, phone};
	}
}
