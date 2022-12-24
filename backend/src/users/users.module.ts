import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterNewUserDto } from './dtos/register-new-user.dto';

@Module({
  imports: [TypeOrmModule.forFeature([User]), RegisterNewUserDto],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
