import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  names: string[];
  constructor() {
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
  }

  ngOnInit() {}
}
