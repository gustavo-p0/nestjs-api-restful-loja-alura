import { Module } from '@nestjs/common';
import { ProductController } from './Product.controller';
import { ProductRepository } from './Product.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductRepository],
})
class ProductModule {}

export { ProductModule };
