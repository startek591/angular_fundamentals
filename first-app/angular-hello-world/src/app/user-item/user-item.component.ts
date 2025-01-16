import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  standalone: true,
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css',
})
export class UserItemComponent implements OnInit {
  @Input() name!: string;

  ngOnInit(): void {}
}
