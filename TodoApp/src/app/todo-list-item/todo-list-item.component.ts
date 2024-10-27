import { Component } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  standalone: true,
  template: `<p>Title: {{ taskTitle }}</p> `,
})
export class TodoListItem {
  taskTitle = 'Read cup of coffee';
  isComplete = false;

  completeTask() {
    this.isComplete = true;
  }

  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }
}
