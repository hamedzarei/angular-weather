import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private searchWeatherUrl = 'http://localhost:7676/weather.php';

  constructor(private http: HttpClient) { }
}
