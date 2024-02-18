import { IsNotEmpty, IsString } from 'class-validator';

class ProductCharacteristicsDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}

export { ProductCharacteristicsDTO };
