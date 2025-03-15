import { Component, OnInit, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent implements OnInit {
  @Input() name!: string;

  constructor() {}

  ngOnInit(): void {}
}
