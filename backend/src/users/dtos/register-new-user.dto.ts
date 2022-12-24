import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterNewUserDto {
    @IsNotEmpty()
    login: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}