import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HelloWorldComponent } from './hello-world.component';
import { By } from '@angular/platform-browser';

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HelloWorldComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the in a p tag', () => {
    const postDebugElement = fixture.debugElement.query(By.css('p'));
    expect(postDebugElement.nativeElement.textContent).toContain(
      'hello-world works!'
    );
  });
});
