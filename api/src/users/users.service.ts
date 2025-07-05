import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { User } from './interfaces/user.interfaces';
// import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/update-user.dto';

const prisma = new PrismaClient();
@Injectable()
export class UsersService {
  async createUser(userName: string): Promise<User> {
    return prisma.user.create({
      data: {
        name: userName,
      },
    });
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    console.log(updateUserDto);
    const { id, name } = updateUserDto;
    const existingUser = await prisma.user.findUnique({
      where: { id: id },
    });

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    if (existingUser.name !== name) {
      const updatedUser = await prisma.user.update({
        where: { id: id },
        data: { name: name },
      });

      return updatedUser;
    }

    return existingUser;
  }
}
