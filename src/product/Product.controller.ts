import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './Product.repository';
import { CreateProductDTO } from './dto/product/CreateProduct.dto';

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
