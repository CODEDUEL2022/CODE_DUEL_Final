import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interfaces';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body('user_name') userName: string): Promise<User> {
    return this.userService.createUser(userName);
  }

  @Post('update')
  async updateUser(
    @Body() requestBody: { user_id: string; user_name: string },
  ): Promise<User> {
    const { user_id, user_name } = requestBody;
    const updateUserDto: UpdateUserDto = { id: user_id, name: user_name }; // DTOに合わせて変換
    return this.userService.updateUser(updateUserDto);
  }
}
