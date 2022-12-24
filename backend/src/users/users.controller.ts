import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Public } from '../app.service';
import { RegisterNewUserDto } from './dtos/register-new-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Public()
    @Post('register')
    registerNewUser(@Body() registerNewUserDto: RegisterNewUserDto){
       return this.userService.registerUser(registerNewUserDto.login, registerNewUserDto.email, registerNewUserDto.password);
    }

}
