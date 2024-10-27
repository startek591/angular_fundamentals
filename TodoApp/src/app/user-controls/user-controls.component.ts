import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'user-controls',
  template: `
    @if (isAdmin) {
    <button>Erase database</button>
    }
  `,
})
export class UserControls {
  isAdmin = true;
}
