import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleComponent } from './article.component';
import { Article } from './article.model';
import { By } from '@angular/platform-browser';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleComponent],
    });
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
  });

  it('should create the article', () => {
    const fixture = TestBed.createComponent(ArticleComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display the article title', () => {
    component.article = new Article('Test Article', 'http://example.com', 5);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.textContent).toContain('Test Article');
  });

  it('should display the article link', () => {
    component.article = new Article('Test Article', 'http://example.com', 5);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a')?.href).toContain('http://example.com');
  });

  it('should display the article votes', () => {
    component.article = new Article('Test Article', 'http://example.com', 5);
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement;
    const aElement: HTMLElement = postDebugElement.query(
      By.css('.votes')
    ).nativeElement;
    expect(aElement.textContent).toContain('5');
  });

  it('should increase the total voes when the user select the upvote button', () => {
    component.article = new Article('Test Article', 'http://example.com', 5);
    component.voteUp();
    expect(component.article.votes).toBe(6);
  });

  it('should decrease the total votes when the user select the downvote button', () => {
    component.article = new Article('Test Article', 'http://example.com', 5);
    component.voteDown();
    expect(component.article.votes).toBe(4);
  });
});
