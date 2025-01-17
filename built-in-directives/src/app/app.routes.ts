import { Routes } from '@angular/router';
import { ExampleDef } from '../model/example.model';
import { IntroComponent } from './intro/intro.component';

export const routes: Routes = [
  {
    label: 'Intro',
    name: 'Root',
    path: '',
    component: IntroComponent,
  } as ExampleDef,
];
