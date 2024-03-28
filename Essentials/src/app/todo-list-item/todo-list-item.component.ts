import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styles: `
    li {
        color: red;
        font-weight: 300;
    }
  `,
})
export class TodoListItem {}
