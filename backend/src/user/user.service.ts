import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: createUserDto.password
      }
    })
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email
      }
    })
  }

  update(email: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { email },
      data: {
        email: updateUserDto.email,
        password: updateUserDto.password
      }
    })
  }

  remove(email: string) {
    return this.prisma.user.delete({
      where: {
        email
      }
    })
  }
}
