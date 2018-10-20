import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "./city";
import {Weather} from "./weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'http://localhost:7676/weather.php';

  constructor(private http: HttpClient) { }

    search(id: number): Observable<Weather> {
        let params = new HttpParams()
            .set('command', 'location')
            .set('woeid', id.toString());
        return this.http.get<Weather>(this.url, {params});
    }
}
