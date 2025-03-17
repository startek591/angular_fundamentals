import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 products', () => {
    expect(component.products.length).toBe(3);
  });

  it('should log the selected product', () => {
    spyOn(console, 'log');
    const testProduct = component.products[0];

    component.productWasSelected(testProduct);

    expect(console.log).toHaveBeenCalledWith('Product clicked: ', testProduct);
  });
});
