import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interfaces';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signUp')
  async createUser(@Body('user_name') userName: string): Promise<User> {
    return this.usersService.createUser(userName);
  }

  @Post('/signIn')
  async updateUser(@Body() updateUserDto: UpdateUserDto): Promise<User> {
    console.log(updateUserDto);
    return this.usersService.updateUser(updateUserDto);
  }
}
