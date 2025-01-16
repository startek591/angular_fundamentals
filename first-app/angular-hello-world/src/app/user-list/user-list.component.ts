import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  imports: [NgFor, UserItemComponent],
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  names!: string[];

  constructor() {
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
  }
  ngOnInit(): void {}
}
