import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
