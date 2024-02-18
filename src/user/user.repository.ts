import { Injectable } from '@nestjs/common';

@Injectable()
class UserRepository {
  #users = [];

  async save(user) {
    this.#users.push(user);
  }

  async findAll() {
    return this.#users;
  }
}

export { UserRepository };
