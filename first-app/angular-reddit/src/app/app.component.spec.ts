import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should initialize the articles array with 3 items', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component.article.length).toEqual(3);
  });

  it('should add a new article when user clicks on submit link button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const titleInput = { value: 'Angular 2' } as HTMLInputElement;
    const linkInput = { value: 'http://angular.io' } as HTMLInputElement;
    component.addArticle(titleInput, linkInput);
    expect(component.article.length).toEqual(4);
  });

  it('should return a sorted array of articles', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const titleInput = { value: 'Angular 2' } as HTMLInputElement;
    const linkInput = { value: 'http://angular.io' } as HTMLInputElement;
    component.addArticle(titleInput, linkInput);
    const sortedArticles = component.sortedArticles();
    expect(sortedArticles[0].votes).toBeGreaterThan(sortedArticles[1].votes);
  });
});
