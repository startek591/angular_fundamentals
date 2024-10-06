import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-item',
  standalone: true,
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css',
})
export class UserItemComponent {
  @Input() name!: string;
  constructor() {}
}
