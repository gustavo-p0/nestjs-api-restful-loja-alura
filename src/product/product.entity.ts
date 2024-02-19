class ProductCharacteristics {
  name: string;
  description: string;
}

class ProductImage {
  url: string;
}

class ProductEntity {
  id: string;
  userId: string;
  name: string;
  value: number;
  availableEntity: number;
  description: string;
  characteristics: ProductCharacteristics[];
  images: ProductImage[];
  category: string;
  creationDate: string;
  updateDate: string;
}

export { ProductEntity };
