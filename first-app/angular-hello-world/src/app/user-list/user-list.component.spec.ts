import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UserListComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 names', () => {
    expect(component.names.length).toBe(4);
  });
});
