import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { ArticleComponent } from './article/article.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  article: Article[];

  constructor() {
    this.article = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.article.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.article.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
