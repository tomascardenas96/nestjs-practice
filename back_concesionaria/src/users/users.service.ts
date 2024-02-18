import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import {
  HttpException,
  HttpStatus,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userRepository: Repository<Users>,
  ) {}

  async createUser(user: createUserDto) {
    const userFound = await this.userRepository.findOne({
      where: {
        userName: user.userName,
      },
    });

    if (userFound) {
      return new HttpException('user already exists', 400);
    }

    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  getUsers() {
    return this.userRepository.find();
  }

  async getOneUser(id: number) {
    const userFound = await this.userRepository.findOne({
      where: {
        id_user: id,
      },
    });

    if (!userFound) {
      throw new NotFoundException('usuario no encontrado');
    }
    return userFound;
  }

  async deleteUser(id: number) {
    const userFound = await this.userRepository.findOne({
      where: { id_user: id },
    });

    try {
      console.log(userFound);
      if (!userFound) {
        throw new NotFoundException('usuario no encontrado');
      }

      const deleteResult = await this.userRepository.delete({ id_user: id });

      if (deleteResult.affected === 0) {
        throw new NotFoundException();
      }
      return deleteResult;
    } catch (error) {
      throw new BadRequestException('error');
    }
  }

  async updateUser(id: number, user: updateUserDto) {
    const userFound = await this.userRepository.findOne({
      where: { id_user: id },
    });
    if (!userFound) {
      throw new HttpException('User not Found', HttpStatus.NOT_FOUND);
    }
    try {
      await this.userRepository.update({ id_user: id }, user);
      return `User updated successfully`;
    } catch (error) {
      throw new HttpException(
        'Failed to update user',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
