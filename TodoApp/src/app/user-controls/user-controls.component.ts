import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'user-controls',
  template: `
    @if (isAdmin) {
    <button>Erase database</button>
    } @else {
    <p>You are not authorized.</p>
    }
  `,
})
export class UserControls {
  isAdmin = true;
}
