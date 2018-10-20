import { Component, OnInit } from '@angular/core';
import {CityService} from "../city.service";
import {forEach} from "@angular/router/src/utils/collection";
import {of} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  protected selectedCities = [
      'Istanbul',
      'Berlin',
      'London',
      'Helsinki',
      'Dublin',
      'Vancouver'
  ];

  protected id: number[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit() {
      this.selectedCities.forEach(
          name => this.cityService.search(name).subscribe(value => this.id.push(value[0].woeid)));
  }

  getId(name: string): number {
      let id: number = 0;
      this.cityService.search(name).subscribe(value => console.log(value[0]));
      return id;
  }

}
