import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductImageComponent } from '../product-image/product-image.component';
import { PriceDisplayComponent } from '../product-display/product-display.component';
import { ProductDepartmentComponent } from '../product-department/product-department.component';

@Component({
  selector: 'app-product-row',
  standalone: true,
  templateUrl: './product-row.component.html',
  imports: [
    ProductImageComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
  ],
})
export class ProductRowComponent {
  @Input() product!: Product;
  @HostBinding('attr.class') cssClass = 'item';
}
