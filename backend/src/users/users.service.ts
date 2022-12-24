import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterNewUserDto } from './dtos/register-new-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}
  
  async registerUser(login: string, email: string, password: string) {
    
    const existingLogin = await this.usersRepository.findOneBy({login});
    const existingEmail = await this.usersRepository.findOneBy({email});
    if(existingLogin){
        return 'Login exist, lets try another login';
    }
    if(existingEmail){
        return 'E-mail exist, just log to your account';
    }
    
    const registerUser = this.usersRepository.create({login, email, password});
    return this.usersRepository.save(registerUser);
  }

  async findOne(login: string): Promise<User> {
    return await this.usersRepository.findOneBy({login});
  }
}