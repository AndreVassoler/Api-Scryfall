import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    signUp(username: any, password: any): void;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(username: string, pass: string): Promise<{
        access_token: string;
    }>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
