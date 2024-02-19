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
import { ProductRepository } from './Product.repository';
import { CreateProductDTO } from './dto/product/CreateProduct.dto';
import { UpdateProductDTO } from './dto/product/UpdateProduct.dto';
import { ProductEntity } from './product.entity';

@Controller('/produtos')
class ProductController {
  constructor(private readonly productRepository: ProductRepository) {}

  @Post()
  async create(@Body() productData: CreateProductDTO) {
    const newProduct = new ProductEntity();
    for (const [key, value] of Object.entries(productData)) {
      newProduct[key] = value;
    }
    newProduct.id = randomUUID();
    this.productRepository.create(newProduct);
    return newProduct;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: UpdateProductDTO) {
    const updated = await this.productRepository.update(id, data);
    return {
      product: updated,
      message: 'Produto atualizado',
    };
  }

  @Get()
  async findAll() {
    return this.productRepository.findAll();
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    const removed = await this.productRepository.remove(id);
    return {
      product: removed,
      message: 'Produto removido',
    };
  }
}

export { ProductController };
