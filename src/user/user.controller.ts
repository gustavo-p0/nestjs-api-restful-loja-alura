import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/user/dto/user/CreateUser.dto';
import { UserRepository } from './user.repository';

@Controller('usuarios')
class UserController {
  constructor(private readonly userRepository: UserRepository) {}
  @Post()
  async create(@Body() userData: CreateUserDTO) {
    this.userRepository.save(userData);
    return userData;
  }

  @Get()
  async findAll() {
    return this.userRepository.findAll();
  }
}

export { UserController };
