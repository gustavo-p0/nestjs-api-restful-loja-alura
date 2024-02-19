import { Injectable } from '@nestjs/common';

import { ProductEntity } from './product.entity';

@Injectable()
class ProductRepository {
  private products = [];

  async create(newProduct: ProductEntity) {
    this.products.push(newProduct);
  }

  async findAll() {
    return this.products;
  }

  private findById(id: string) {
    const possibleProduct = this.products.find((product) => product.id === id);
    if (!possibleProduct) throw new Error('Não existe um produto para esse id');

    return possibleProduct;
  }

  async update(id: string, data: Partial<ProductEntity>) {
    const possibleProduct = this.findById(id);
    const notUpdatableKeys = ['id', 'userId'];
    for (const [key, value] of Object.entries(data)) {
      if (notUpdatableKeys.includes(key)) continue;
      possibleProduct[key] = value;
    }
    return possibleProduct;
  }

  async remove(id: string) {
    const possibleProduct = this.findById(id);

    this.products = this.products.filter((product) => product.id !== id);
    return possibleProduct;
  }
}

export { ProductRepository };
