import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getAll().subscribe(products => this.products = products)
  }
}
