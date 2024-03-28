import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'todo-list-item',
  template: ` <li>(TODO) Read Angular Essentials Guide</li> `,
  styles: `
    li {
        color: red;
        font-weight: 300;
    }
  `,
})
export class TodoListItem {}
