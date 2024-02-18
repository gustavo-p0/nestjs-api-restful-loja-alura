import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

class ProductImageDTO {
  @IsUrl()
  url: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}

export { ProductImageDTO };
