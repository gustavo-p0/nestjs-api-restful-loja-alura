import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
class UserRepository {
  #users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.#users.push(user);
  }

  async findAll() {
    return this.#users;
  }

  private findById(id: string) {
    const possibleUser = this.#users.find((user) => user.id === id);
    if (!possibleUser) throw new Error('Usuário não existe');

    return possibleUser;
  }
  async emailExists(email: string) {
    const possibleUser = this.#users.find((user) => user.email === email);
    return possibleUser !== undefined;
  }

  async update(id: string, data: Partial<UserEntity>) {
    const possibleUser = this.findById(id);

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'id') return;

      possibleUser[key] = value;
    });

    return possibleUser;
  }

  async remove(id: string) {
    const possibleUser = this.findById(id);
    this.#users = this.#users.filter((user) => user.id !== id);

    return possibleUser;
  }
}

export { UserRepository };
