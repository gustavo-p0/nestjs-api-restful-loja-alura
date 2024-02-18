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

  async emailExists(email: string) {
    const possibleUser = this.#users.find((user) => user.email === email);
    return possibleUser !== undefined;
  }
}

export { UserRepository };
