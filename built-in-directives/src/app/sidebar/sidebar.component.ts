import { Component, OnInit, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { ExampleDef } from '../../model/example.model';
import { SidebarItemComponent } from './sidebar-item.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor, SidebarItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  @Input('items') items!: ExampleDef[];
  ngOnInit() {}
}
