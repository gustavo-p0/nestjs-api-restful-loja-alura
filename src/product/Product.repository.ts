import { Injectable } from '@nestjs/common';

@Injectable()
class ProductRepository {
  private products = [];

  async create(newProduct) {
    this.products.push(newProduct);
  }

  async findAll() {
    return this.products;
  }
}

export { ProductRepository };
