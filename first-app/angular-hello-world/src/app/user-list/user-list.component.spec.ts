import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { UserItemComponent } from '../user-item/user-item.component';
import { By } from '@angular/platform-browser';

describe('User List Component', () => {
  let fixture: ComponentFixture<UserListComponent>;
  let component: UserListComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserListComponent, UserItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of names', () => {
    expect(component.names.length).toBe(4);
  });

  it('should create one name child Element for each user item', () => {
    fixture.detectChanges();
    const debugElement = fixture.debugElement;
    const userItemElement = debugElement.queryAll(By.css('.users'));
    expect(userItemElement.length).toBe(component.names.length);
  });
});
