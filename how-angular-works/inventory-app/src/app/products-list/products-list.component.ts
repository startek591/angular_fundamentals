import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRowComponent } from '../product-row/product-row.component';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  imports: [NgFor, ProductRowComponent],
})
export class ProductsListComponent {
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

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
