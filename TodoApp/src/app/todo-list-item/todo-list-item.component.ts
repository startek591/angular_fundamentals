import { Component } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  standalone: true,
  template: ` <li>(TODO) Read Angular Essentials Guide</li> `,
  styles: `
    li {
        color: red;
        font-weight: 300
    }
  `,
})
export class TodoListItem {
  taskTitle = '';
  isComplete = false;
}
