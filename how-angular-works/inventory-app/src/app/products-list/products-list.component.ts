import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductRowComponent } from '../product-row/product-row.component';

@Component({
  selector: 'app-products-list',
  imports: [NgFor, ProductRowComponent],
  standalone: true,
  templateUrl: './products-list.component.html',
})
export class ProductListComponent {
  @Input() productList!: Product[];
  @Output() onProductSelected!: EventEmitter<Product>;

  private currentProduct!: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }
}
