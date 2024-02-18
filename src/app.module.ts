import { Module } from '@nestjs/common';
import { ProductModule } from './product/Product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
