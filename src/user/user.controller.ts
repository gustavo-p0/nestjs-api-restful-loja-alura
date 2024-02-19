import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDTO } from 'src/user/dto/user/CreateUser.dto';
import { ListUserDTO } from './dto/list/LIstUser.dto';
import { UpdateUserDTO } from './dto/user/UpdateUser.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Controller('usuarios')
class UserController {
  constructor(private readonly userRepository: UserRepository) {}
  @Post()
  async create(@Body() userData: CreateUserDTO) {
    // aqui os dados já foram validados e é certeza de que o e-mail é único
    const userEntity = new UserEntity();
    for (const [key, value] of Object.entries(userData)) {
      userEntity[key] = value;
    }
    userEntity.id = randomUUID();
    this.userRepository.save(userEntity);
    return new ListUserDTO(userEntity.id, userEntity.name);
  }

  @Get()
  async findAll() {
    const savedUsers = await this.userRepository.findAll();
    const userList = savedUsers.map(
      (user) => new ListUserDTO(user.id, user.name),
    );

    return userList;
  }
  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: UpdateUserDTO) {
    const updated = await this.userRepository.update(id, data);
    return {
      user: updated,
      message: 'Usuário atualizado com sucesso',
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const removed = await this.userRepository.remove(id);
    return {
      user: removed,
      message: 'Usuário removido com sucesso',
    };
  }
}

export { UserController };
