import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";
import {WeatherService} from "../weather.service";
import {Weather} from "../weather";
import {ConsolidatedWeather} from "../consolidated-weather";

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  protected woeid: number;
  protected weather: Weather;
  protected consolidated_weather: ConsolidatedWeather[];

  constructor(
      private route: ActivatedRoute,
      private weatherService: WeatherService
  ) {
    this.route.params.subscribe(value => {
        this.woeid = parseInt(this.route.snapshot.paramMap.get('woeid'));
        this.weatherService.search(this.woeid).subscribe(value => this.setWeatherValues(value));
    });
  }

  ngOnInit() {
    this.woeid = parseInt(this.route.snapshot.paramMap.get('woeid'));
    this.weatherService.search(this.woeid).subscribe(value => this.setWeatherValues(value));
  }

  setWeatherValues(value: Weather): void {
    this.weather = value;
    this.consolidated_weather = value.consolidated_weather;
  }

  getDay(date: string): string {
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var d = new Date(date);
      return days[d.getDay()];
  }
}
