import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'product-image',
  standalone: true,
  template: ` <img class="product-image" [src]="product.imageUrl" /> `,
})
export class ProductImageComponent {
  @Input() product!: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
}
