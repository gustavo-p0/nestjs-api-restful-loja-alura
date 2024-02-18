import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { ProductCharacteristicsDTO } from './ProductCharacteristics.dto';
import { ProductImageDTO } from './ProductImage.dto';

class CreateProductDTO {
  @IsUUID()
  usuarioId: string;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  value: number;
  @IsNumber()
  availableQuantity: number;
  @IsNotEmpty()
  @MaxLength(1000)
  description: string;
  @ValidateNested()
  @Type(() => ProductCharacteristicsDTO)
  @IsArray()
  @ArrayMinSize(3)
  characteristics: ProductCharacteristicsDTO[];
  @ValidateNested()
  @IsArray()
  @Type(() => ProductImageDTO)
  @ArrayMinSize(1)
  images: ProductImageDTO[];
  @IsNotEmpty()
  category: string;
  @IsString()
  creationDate: string;
  @IsString()
  updateDate: string;
}

export { CreateProductDTO };
