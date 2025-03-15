import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
  standalone: true,
  selector: 'user-list',
  imports: [NgFor, UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  names: string[] = [];

  constructor() {
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
  }

  ngOnInit(): void {}
}
