import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriceDisplayComponent } from './product-display.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Product } from '../model/product.model';

describe('ProductDisplayComponent', () => {
  let fixture: ComponentFixture<PriceDisplayComponent>;
  let component: PriceDisplayComponent;
  let debugElement: DebugElement;
  let mockProduct: Product;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceDisplayComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(PriceDisplayComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    mockProduct = {
      sku: '1',
      name: 'Product 1',
      department: ['Product 1 Department'],
      imageUrl: 'images/test.jpg',
      price: 10.0,
    };

    component.price = mockProduct.price;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it("should display the product's price", () => {
    const priceElement = debugElement.query(
      By.css('div.price-display')
    ).nativeElement;
    expect(priceElement).toBeTruthy();
    expect(priceElement.textContent).toContain(mockProduct.price);
  });
});
