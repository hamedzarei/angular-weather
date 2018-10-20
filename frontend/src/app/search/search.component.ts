import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CityService} from "../city.service";
import {City} from "../city";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  protected id: number[];
  protected keyword: string;

  constructor(
      private route: ActivatedRoute,
      private cityService: CityService
  ) { }

  ngOnInit() {
    console.log('qq');
      this.keyword = this.route.snapshot.paramMap.get('keyword');
      this.cityService.search(this.keyword).subscribe(value => this.setId(value));
  }

  setId(cities: City[]): void {
      this.id = cities.map(city => city.woeid);
  }

}
