import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-row',
  standalone: true,
  templateUrl: './product-row.component.html',
})
export class ProductRowComponent {
  @Input() product!: Product;
  @HostBinding('attr.class') cssClass = 'item';
}
