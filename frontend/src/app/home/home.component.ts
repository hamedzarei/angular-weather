import { Component, OnInit } from '@angular/core';
import {CityService} from "../city.service";
import {forEach} from "@angular/router/src/utils/collection";
import {of} from "rxjs";
import {City} from "../city";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  protected loading: boolean = true;

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
          name => this.cityService.search(name).subscribe(value => this.setValue(value)));
      // this.loading = false;
  }

  setValue(value: City[]): void {
      this.id.push(value[0].woeid);
      if (this.id.length == this.selectedCities.length) {
          this.loading = false;
      }
  }

}
