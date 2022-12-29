import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterNewUserDto } from './dtos/register-new-user.dto';
import { User } from './user.entity';
import { HttpException } from '@nestjs/common';
import { MyHttpException } from 'src/MyHttpException/MyHttpException';

@Injectable()
export class UsersService {
    findOneAndUpdate(login: string) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}
  
  async registerUser(login: string, email: string, password: string, firstname: string, lastname: string) {
    
    const existingLogin = await this.usersRepository.findOneBy({login});
    const existingEmail = await this.usersRepository.findOneBy({email});
    const errors = [];

    if(existingLogin){
      errors.push('Login exist, lets try another login');
    }
    if(existingEmail){
      errors.push('E-mail exist, just log to your account');
    }

    if(errors.length) {
      throw new MyHttpException(errors);
    }
    
   
    let counterSameNames = await this.countUsersByName(firstname, lastname);
    let safe_url = firstname + "-" + lastname + (counterSameNames ? `-${++counterSameNames}` : "");
    safe_url = safe_url.toLowerCase().replace(/ś/g, 's').replace(/ń/g, 'n').replace(/ż/g, 'z').replace(/ę/g, 'e').replace(/ó/g, 'o').replace(/ł/g, 'l').replace(/ć/g, 'c');
    safe_url = encodeURIComponent(safe_url);


    const registerUser = this.usersRepository.create({login, email, password, firstname, lastname, safe_url });

    return this.usersRepository.save(registerUser);
  }

  async countUsersByName(firstname: string, lastname: string): Promise<number> {
    const users = await this.usersRepository.find({
      where: {
        firstname,
        lastname,
      },
    });
    return users.length;
  }

  async findOne(login: string): Promise<User> {
    return await this.usersRepository.findOneBy({login});
  }
}