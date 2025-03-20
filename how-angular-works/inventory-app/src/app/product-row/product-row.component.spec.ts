import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductRowComponent } from './product-row.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Product } from '../model/product.model';

describe('ProductRowComponent', () => {
  let fixture: ComponentFixture<ProductRowComponent>;
  let component: ProductRowComponent;
  let debugElement: DebugElement;
  let mockProduct: Product;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRowComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductRowComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    mockProduct = {
      sku: '1',
      name: 'Product 1',
      department: ['Product 1 Department'],
      imageUrl: 'images/test.jpg',
      price: 10.0,
    };

    component.product = mockProduct;
    fixture.detectChanges();
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it("should the product's name", () => {
    const productNameElement = debugElement.query(
      By.css('div.header')
    ).nativeElement;
    expect(productNameElement).toBeTruthy();
    expect(productNameElement.textContent).toBe(mockProduct.name);
  });

  it("should the product's sku ", () => {
    const productSkuElement = debugElement.query(
      By.css('div.product-sku')
    ).nativeElement;
    expect(productSkuElement).toBeTruthy();
    expect(productSkuElement.textContent).toContain(mockProduct.sku);
  });
});
