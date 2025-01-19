import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExampleDef } from '../model/example.model';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  providers: [{ provide: 'ExampleDefs', useValue: routes }],
})
export class AppComponent {
  title = 'built-in-directives';

  constructor(@Inject('ExampleDefs') public examples: ExampleDef[]) {}
}
