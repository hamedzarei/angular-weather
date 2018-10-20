import { Component, OnInit } from '@angular/core';
import {City} from "../city";
import {CityService} from "../city.service";

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

  protected cities: City[];
  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

  search(name: string): void {
    this.cityService.search(name).subscribe(value => this.cities = value.slice(6));
  }
}
