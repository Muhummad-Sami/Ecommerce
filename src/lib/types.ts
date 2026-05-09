export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  collectionName: string;
  isFeatured: boolean;
  stock: number;
}
