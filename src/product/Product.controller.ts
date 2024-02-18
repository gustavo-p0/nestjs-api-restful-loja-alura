import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDTO } from 'src/dto/product/CreateProduct.dto';
import { ProductRepository } from './Product.repository';

@Controller('/produtos')
class ProductController {
  constructor(private readonly productRepository: ProductRepository) {}

  @Post()
  async create(@Body() productData: CreateProductDTO) {
    this.productRepository.create(productData);
    return productData;
  }

  @Get()
  async findAll() {
    return this.productRepository.findAll();
  }
}

export { ProductController };
