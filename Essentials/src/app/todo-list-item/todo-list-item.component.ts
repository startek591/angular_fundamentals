import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'todo-list-item',
  template: ` <p>Title: {{ taskTitle }}</p> `,
  styleUrl: './todo-list-item.component.css',
})
export class TodoListItem {
  taskTitle = 'Read cup of coffee';
}
