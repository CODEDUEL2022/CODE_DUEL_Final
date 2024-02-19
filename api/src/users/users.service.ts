import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User } from './interfaces/user.interfaces';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(userName: string): Promise<User> {
    const userId = uuidv4(); // uuidを生成

    return this.prisma.user.create({
      data: {
        id: userId,
        name: userName,
      },
    });
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    const { id, name } = updateUserDto;

    const existingUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    if (existingUser.name !== name) {
      const updatedUser = await this.prisma.user.update({
        where: { id },
        data: { name },
      });

      return updatedUser;
    }

    return existingUser;
  }
}
