import { Optional } from '@nestjs/common';
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

class UpdateProductDTO {
  @IsUUID()
  id: string;
  @IsUUID()
  userId: string;
  @Optional()
  @IsNotEmpty()
  @IsString()
  name: string;
  @Optional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  value: number;
  @Optional()
  @IsNumber()
  availableQuantity: number;
  @Optional()
  @IsNotEmpty()
  @MaxLength(1000)
  description: string;
  @Optional()
  @ValidateNested()
  @Type(() => ProductCharacteristicsDTO)
  @IsArray()
  @ArrayMinSize(3)
  characteristics: ProductCharacteristicsDTO[];
  @Optional()
  @ValidateNested()
  @IsArray()
  @Type(() => ProductImageDTO)
  @ArrayMinSize(1)
  images: ProductImageDTO[];
  @Optional()
  @IsNotEmpty()
  category: string;
  @Optional()
  @IsString()
  creationDate: string;
  @Optional()
  @IsString()
  updateDate: string;
}

export { UpdateProductDTO };
