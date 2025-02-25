import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserItemComponent } from './user-item.component';
import { By } from '@angular/platform-browser';

describe('UserItemComponent', () => {
  let component: UserItemComponent;
  let fixture: ComponentFixture<UserItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UserItemComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(UserItemComponent);
    component = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the name in a p tag if it the name recieve is blank', () => {
    const postDebugElement = fixture.debugElement.query(By.css('p'));
    const testName = (component.name = '');
    fixture.detectChanges();
    expect(postDebugElement.nativeElement.textContent).toContain(
      'Hello ' + testName
    );
  });

  it('should render the name in a p tag', () => {
    const postDebugElement = fixture.debugElement.query(By.css('p'));
    const testName = (component.name = 'John Doe');
    fixture.detectChanges();
    expect(postDebugElement.nativeElement.textContent).toContain(
      'Hello ' + testName
    );
  });

  it('should not render the name if then name is not provided', () => {
    const postDebugElement = fixture.debugElement.query(By.css('p'));
    fixture.detectChanges();
    expect(postDebugElement.nativeElement.textContent).not.toEqual(
      'Hello John Doe'
    );
  });
});
