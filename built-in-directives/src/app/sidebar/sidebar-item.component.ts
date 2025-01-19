import { Component, OnInit, Input } from '@angular/core';
import { NgClass, Location } from '@angular/common';
import { ExampleDef } from '../../model/example.model';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  imports: [NgClass, RouterModule],
  standalone: true,
  templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent implements OnInit {
  @Input('item') item!: ExampleDef;

  constructor(private route: ActivatedRoute, private location: Location) {}

  isActive(): boolean {
    return `/${this.item.path}` === this.location.path();
  }
  ngOnInit() {}
}
