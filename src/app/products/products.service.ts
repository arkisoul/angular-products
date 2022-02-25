import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product, PRODUCT } from './product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly BASE_URL = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}

  add(data: Product) {
    return this.http.post<Product>(this.BASE_URL, data);
  }

  update() {}
  delete() {}

  getAll() {
    return this.http.get<Product[]>(this.BASE_URL);
  }

  getById() {}
}
