import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Users } from './entity/users.entity';
import { updateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  createUser(@Body() newUser: createUserDto) {
    return this.userService.createUser(newUser);
  }

  @Get()
  getUsers(): Promise<Users[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  getOneUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getOneUser(id);
  }
  //parseIntPipe pasaba el Id que era string a number

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: updateUserDto,
  ) {
    return this.userService.updateUser(id, user);
  }

}
