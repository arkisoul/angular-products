export type PRODUCT = {
  id?: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export class Product {
  id?: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;

  constructor(data: PRODUCT) {
    this.id = data.id;
    this.title = data.title;
    this.price = data.price;
    this.category = data.category;
    this.description = data.description;
    this.image = data.image;
  }
}
