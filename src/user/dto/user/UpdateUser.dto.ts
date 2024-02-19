import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { UniqueEmail } from 'src/user/validation/unique-email.validator';

class UpdateUserDTO {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsOptional()
  @IsEmail()
  @UniqueEmail({ message: 'E-mail precisa ser único' })
  email: string;
  @IsOptional()
  @MinLength(6)
  password: string;
}

export { UpdateUserDTO };
