import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Person } from '../../model/person.model';
import { CityGroup } from '../../model/citygroup.model';

@Component({
  selector: 'app-ng-for-example',
  imports: [NgFor],
  standalone: true,
  templateUrl: './ng-for-example.component.html',
})
export class NgForExampleComponent implements OnInit {
  cities: string[] = [];
  people!: Person[];
  peopleByCity!: CityGroup[];

  constructor() {}

  ngOnInit() {
    this.cities = ['Miami', 'Sao Paulo', 'New York'];
    this.people = [
      { name: 'Anderson', age: 35, city: 'Sao Paulo' },
      { name: 'John', age: 12, city: 'Miami' },
      { name: 'Peter', age: 22, city: 'New York' },
    ];
    this.peopleByCity = [
      {
        city: 'Miami',
        people: [
          { name: 'John', age: 12 },
          { name: 'Angel', age: 22 },
        ],
      },
      {
        city: 'Sao Paulo',
        people: [
          { name: 'Anderson', age: 35 },
          { name: 'Felipe', age: 36 },
        ],
      },
    ];
  }
}
