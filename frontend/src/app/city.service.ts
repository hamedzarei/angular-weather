import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {City} from "./city";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private url = 'http://localhost:7676/weather.php';

  constructor(private http: HttpClient) { }

  search(name: string): Observable<City[]> {
    let params = new HttpParams()
        .set('command', 'search')
        .set('keyword', name);
    return this.http.get<City[]>(this.url, {params});
  }
}

