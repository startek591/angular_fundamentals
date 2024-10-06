import { Component } from '@angular/core';

@Component({
  selector: 'user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css',
})
export class UserItemComponent {
  name: string;
  constructor() {
    this.name = 'Felipe';
  }
}
