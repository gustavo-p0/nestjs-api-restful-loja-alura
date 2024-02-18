import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UniqueEmail } from 'src/user/validation/unique-email.validator';

class CreateUserDTO {
  @IsString({ message: 'O nome precisa ser uma string' })
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  name: string;

  @IsEmail({}, { message: 'O e-mail informado é inválido' })
  @UniqueEmail({ message: 'Já existe um usuário com esse e-mail' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres.' })
  password: string;
}

export { CreateUserDTO };
