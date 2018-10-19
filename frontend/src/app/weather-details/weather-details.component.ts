import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  protected woeid: number;
  constructor(
      private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.woeid = parseInt(this.route.snapshot.paramMap.get('woeid'));
  }

}
