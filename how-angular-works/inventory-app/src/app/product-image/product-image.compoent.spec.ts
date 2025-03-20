import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductImageComponent } from './product-image.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Product } from '../model/product.model';

describe('ProductImageComponent', () => {
  let fixture: ComponentFixture<ProductImageComponent>;
  let component: ProductImageComponent;
  let debugElement: DebugElement;
  let mockProduct: Product;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImageComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductImageComponent);
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

  it("should display the product's imageUrl", () => {
    const imgElement = debugElement.query(By.css('img')).nativeElement;
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toContain(mockProduct.imageUrl);
  });
});
