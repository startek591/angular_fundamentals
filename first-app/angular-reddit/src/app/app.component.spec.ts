import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Article } from './article/article.model';

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

  it('should have articles', () => {
    expect(component.articles.length).toBe(3);
  });

  it('should add an new article', () => {
    const titleInput = document.createElement('input') as HTMLInputElement;
    const linkInput = document.createElement('input') as HTMLInputElement;

    titleInput.value = 'Test';
    linkInput.value = 'https://test.com';

    const result = component.addArticle(titleInput, linkInput);

    expect(component.articles.length).toBe(4);
    expect(component.articles[3].title).toEqual('Test');
    expect(component.articles[3].link).toEqual('https://test.com');

    expect(titleInput.value).toBe('');
    expect(linkInput.value).toBe('');

    expect(result).toBe(false);
  });

  it('should return articles sorted by votes in descending order', () => {
    const article1 = new Article('Article 1', 'https://example.com/1', 5);
    const article2 = new Article('Article 2', 'https://example.com/2', 10);
    const article3 = new Article('Article 3', 'https://example.com/3', 7);
    component.articles = [article1, article2, article3];

    const sortedArticles = component.sortedArticles();

    expect(sortedArticles[0]).toBe(article2);
    expect(sortedArticles[1]).toBe(article3);
    expect(sortedArticles[2]).toBe(article1);
  });
});
