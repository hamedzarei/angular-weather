import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {City} from "./city";
import {Weather} from "./weather";
import {environment, urls} from "../environments/environment";
import {urls as urlsProd} from "../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = 'http://localhost:7676/weather.php';

  constructor(private http: HttpClient) {
      if (environment.production) {
          this.url = urlsProd.backend;
      } else {
          this.url = urls.backend;
      }
  }

    search(id: number): Observable<Weather> {
        let params = new HttpParams()
            .set('command', 'location')
            .set('woeid', id.toString());
        return this.http.get<Weather>(this.url, {params});
    }
}
