import { Component, OnInit } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-ng-switch-example',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  standalone: true,
  templateUrl: './ng-switch-example.component.html',
})
export class NgSwitchExampleComponent implements OnInit {
  choice!: number;

  constructor() {}

  ngOnInit() {
    this.choice = 1;
  }

  nextChoice() {
    this.choice += 1;

    if (this.choice > 5) {
      this.choice = 1;
    }
  }
}
