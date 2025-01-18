import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-ng-style-example',
  imports: [NgStyle],
  standalone: true,
  templateUrl: './ng-style-example.component.html',
})
export class NgStyleExampleComponent implements OnInit {
  color!: string;
  fontSize!: number;
  style!: {
    'background-color': string;
    'border-radius': string;
    border?: string;
    width?: string;
    height?: string;
  };

  constructor() {}

  ngOnInit(): void {
    this.fontSize = 16;
    this.color = 'blue';
    this.style = {
      'background-color': '#ccc',
      'border-radius': '50px',
      height: '30px',
      width: '30px',
    };
  }

  apply(color: string, fontSize: number): void {
    this.color = color;
    this.fontSize = fontSize;
  }

  convertStringToNumber(value: string): number {
    return Number(value);
  }
}
