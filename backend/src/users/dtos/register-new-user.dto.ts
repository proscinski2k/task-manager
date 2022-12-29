import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterNewUserDto {
    @IsNotEmpty()
    login: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    safe_url: string;

    profile_photo_url: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}