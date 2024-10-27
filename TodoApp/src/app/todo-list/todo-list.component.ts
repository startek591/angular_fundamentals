import { TodoListItem } from '../todo-list-item/todo-list-item.component';
import { Component } from '@angular/core';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [TodoListItem],
  template: `
    <ul>
      <todo-list-item></todo-list-item>
    </ul>
  `,
})
export class TodoList {}
