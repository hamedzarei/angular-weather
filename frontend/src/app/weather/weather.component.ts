import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";
import {CityService} from "../city.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input() name: string;

  protected woeids: number[];
  protected keyword: string;
  constructor(
      private route: ActivatedRoute,
      private cityService: CityService,
      private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.keyword = this.route.snapshot.paramMap.get('keyword');
    this.getWeather();
  }

  getWeather(): void {
      this.cityService.search(this.keyword).subscribe(value => this.woeids = value.map( a => a.woeid));
  }

}
