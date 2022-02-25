import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule],
  declarations: [
    ProductsListComponent,
    ProductComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailsComponent,
  ],
})
export class ProductsModule {}
