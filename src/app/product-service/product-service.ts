import { Injectable } from '@angular/core';
import { Product } from '../types/Product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  protected productList: Product[] = [
    {
      id: 0,
      prodName: 'IPhone 17 Pro Max',
      prodPicNameSmall: 'iphone17.jpg',
      prodPicNameLarge: 'iphone17.jpg',
      prodDescriptionShort: 'The Latest IPhone',
      prodDescriptionLong: 'The new iphone has an m5 chip with 600gb of ram',
      prodPrice: 1050.99,
      prodQuantity: 6
    },
    {
      id: 1,
      prodName: 'IPhone 16 Pro Max',
      prodPicNameSmall: 'iphone16.jpg',
      prodPicNameLarge: 'iphone16.jpg',
      prodDescriptionShort: 'The Second Latest IPhone',
      prodDescriptionLong: 'The new iphone has an m5 chip with 600gb of ram',
      prodPrice: 950.99,
      prodQuantity: 6
    },
    {
      id: 2,
      prodName: 'Apple Macbook Air ',
      prodPicNameSmall: '',
      prodPicNameLarge: 'macbook.jpg',
      prodDescriptionShort: 'All in Apple Desktop',
      prodDescriptionLong: '500GB Hard disk, 32gb RAM, and much more.',
      prodPrice: 2050.99,
      prodQuantity: 6
    },

  ]
  constructor() { }

  getProductById(id: number): Product | undefined {
    return this.productList.find(p => p.id === id);
  }


  getProductList(): Product[] {

    return this.productList;
  }
}
