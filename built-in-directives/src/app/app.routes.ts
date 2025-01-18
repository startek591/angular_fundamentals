import { Routes } from '@angular/router';
import { ExampleDef } from '../model/example.model';
import { IntroComponent } from './intro/intro.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';

export const routes: Routes = [
  {
    label: 'Intro',
    name: 'Root',
    path: '',
    component: IntroComponent,
  } as ExampleDef,
  {
    label: 'NgFor',
    name: 'NgFor',
    path: 'ng_for',
    component: NgForExampleComponent,
  } as ExampleDef,
  {
    label: 'NgSwitch',
    name: 'NgSwitch',
    path: 'ng_switch',
    component: NgSwitchExampleComponent,
  } as ExampleDef,
  {
    label: 'NgStyle',
    name: 'NgStyle',
    path: 'ng_style',
    component: NgStyleExampleComponent,
  } as ExampleDef,
];
