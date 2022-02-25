import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  product: Product;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {}

  addNew() {
    this.productsService.add({
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    }).subscribe(product => this.product = product);
  }
}
