import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserItemComponent } from './user-item.component';
import { By } from '@angular/platform-browser';

describe('User Item Component', () => {
  let fixture: ComponentFixture<UserItemComponent>;
  let component: UserItemComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserItemComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(UserItemComponent);
    component = fixture.componentInstance;
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the user item', () => {
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement;
    const pElement: HTMLElement = postDebugElement.query(
      By.css('p')
    ).nativeElement;
    expect(pElement.textContent).toEqual('Hello ', component.name);
  });
});
