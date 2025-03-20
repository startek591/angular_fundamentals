import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDepartmentComponent } from './product-department.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Product } from '../model/product.model';

describe('ProductDepartmentComponent', () => {
  let fixture: ComponentFixture<ProductDepartmentComponent>;
  let component: ProductDepartmentComponent;
  let debugElement: DebugElement;
  let mockProduct: Product;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDepartmentComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductDepartmentComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    mockProduct = {
      sku: '1',
      name: 'Product 1',
      department: ['Men', 'Accessories', 'Misc'],
      imageUrl: 'images/test.jpg',
      price: 10.0,
    };

    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it("should display the product's department the product belongs too", () => {
    const productDepartmentElement = debugElement.queryAll(By.css('span'));

    expect(
      productDepartmentElement[0].nativeElement.textContent.trim()
    ).toContain('Men');
  });
});
