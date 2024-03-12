export interface Collection {
  id: number;
  name: string;
}

export interface CollectionProduct {
  id: number;
  name: string;
  description: string;
  url: string;
  file: {
    type: 'image' | 'video';
    url: string;
  };
  products: Product[];
}

export interface Image {
  id: number;
  url: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  stock: number;
  images: Image[];
  url: string;
}
