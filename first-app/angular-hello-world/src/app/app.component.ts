import { Component } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-hello-world';
}
