import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(login: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(login);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { login: user.login, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}