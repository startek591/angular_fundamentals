import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { Product } from '../model/product.model';

@Component({
  selector: 'product-department',
  imports: [NgFor],
  standalone: true,
  templateUrl: './product-department.component.html',
})
export class ProductDepartmentComponent {
  @Input() product!: Product;
}
