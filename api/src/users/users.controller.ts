import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interfaces';
import { UpdateUserDto } from './dto/update-user.dto';
import { UUID } from 'crypto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body('user_name') userName: string): Promise<User> {
    return this.usersService.createUser(userName);
  }

  @Post('update')
  async updateUser(
    @Body() requestBody: { user_id: UUID; user_name: string },
  ): Promise<User> {
    const { user_id, user_name } = requestBody;
    const updateUserDto: UpdateUserDto = { id: user_id, name: user_name }; // DTOに合わせて変換
    return this.usersService.updateUser(updateUserDto);
  }
}
