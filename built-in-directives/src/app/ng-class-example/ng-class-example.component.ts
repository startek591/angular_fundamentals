import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ng-class-example',
  imports: [NgClass],
  templateUrl: './ng-class-example.component.html',
})
export class NgClassExampleComponent implements OnInit {
  isBordered!: boolean;
  classesObj!: { bordered: boolean };
  classList!: string[];

  constructor() {}

  ngOnInit(): void {
    this.isBordered = true;
    this.classList = ['blue', 'round'];
    this.toggleBorder();
  }

  toggleBorder(): void {
    this.isBordered = !this.isBordered;
    this.classesObj = {
      bordered: this.isBordered,
    };
  }

  toggleClass(cssClass: string): void {
    const pos: number = this.classList.indexOf(cssClass);
    if (pos > -1) {
      this.classList.splice(pos, 1);
    } else {
      this.classList.push(cssClass);
    }
  }
}
