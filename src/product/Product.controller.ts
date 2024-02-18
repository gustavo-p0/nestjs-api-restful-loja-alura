import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './Product.repository';

@Controller('/produtos')
class ProductController {
  constructor(private readonly productRepository: ProductRepository) {}

  @Post()
  async create(@Body() productData) {
    this.productRepository.create(productData);
    return productData;
  }

  @Get()
  async findAll() {
    return this.productRepository.findAll();
  }
}

export { ProductController };
