import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UniqueEmailValidator } from './validation/unique-email.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, UniqueEmailValidator],
})
class UserModule {}

export { UserModule };
