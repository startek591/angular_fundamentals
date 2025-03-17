import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleComponent } from './article.component';
import { Article } from './article.model';
import { By } from '@angular/platform-browser';

describe('ArticleComponent', () => {
  let fixture: ComponentFixture<ArticleComponent>;
  let component: ArticleComponent;
  let article: Article;

  beforeEach(async () => {
    article = new Article('Test', 'https://www.test.com');
    article.votes = 2;
    await TestBed.configureTestingModule({
      imports: [ArticleComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    component.article = article;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the votes', () => {
    const votesElement = fixture.debugElement.query(
      By.css('.ui.statistic .value')
    );
    expect(votesElement.nativeElement.textContent).toContain(2);
  });

  it('should display the title', () => {
    const titleElement = fixture.debugElement.query(By.css('.ui.large.header'));
    expect(titleElement.nativeElement.textContent).toContain('Test');
  });

  it('should increase the vote when user clicks on vote up button', () => {
    spyOn(component.article, 'voteUp');
    const upvoteButton = fixture.debugElement.queryAll(
      By.css('ul.ui.big.horizontal.list.voters li.item a')
    );
    upvoteButton[0].triggerEventHandler('click', null);
    expect(component.article.voteUp).toHaveBeenCalled();
  });

  it('should decrease the vote when user clicks on vote down button', () => {
    spyOn(component.article, 'voteDown');
    const downvoteButton = fixture.debugElement.queryAll(
      By.css('ul.ui.big.horizontal.list.voters li.item a')
    );
    downvoteButton[1].triggerEventHandler('click', null);
    expect(component.article.voteDown).toHaveBeenCalled();
  });
});
