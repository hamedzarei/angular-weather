import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";
import {CityService} from "../city.service";
import {ActivatedRoute} from "@angular/router";
import {Weather} from "../weather";

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  protected loading: boolean = true;

  @Input() name: string;
  @Input() id: number = -1;

  protected woeids: number[];
  protected keyword: string;
  protected weather: Weather;

  constructor(
      private route: ActivatedRoute,
      private cityService: CityService,
      private weatherService: WeatherService
  ) { }

  ngOnInit() {
    if (this.id != -1) {
      this.weatherService.search(this.id).subscribe(value => this.setValue(value));
    }
  }


    setValue(value: Weather): void {
        this.weather = value;
        this.loading = false;
    }

}
