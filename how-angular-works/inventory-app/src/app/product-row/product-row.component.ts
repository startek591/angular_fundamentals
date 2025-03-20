import { Component, Input, HostBinding } from '@angular/core';
import { ProductImageComponent } from '../product-image/product-image.component';
import { ProductDepartmentComponent } from '../product-department/product-department.component';
import { PriceDisplayComponent } from '../price-display/product-display.component';
import { Product } from '../model/product.model';

@Component({
  selector: 'product-row',
  imports: [
    ProductImageComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
  ],
  standalone: true,
  templateUrl: './product-row.component.html',
})
export class ProductRowComponent {
  @Input() product!: Product;
  @HostBinding('attr.class') cssClass = 'item';
}
