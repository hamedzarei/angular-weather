import { Component, OnInit } from '@angular/core';
import {City} from "../city";
import {CityService} from "../city.service";

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

  protected loading: boolean = false;
  protected noData: boolean = false;
  protected cities: City[];
  private input: string = '';
  constructor(private cityService: CityService) { }

  ngOnInit() {
  }

  search(name: string): void {
    this.input = name;
    this.noData = false;
    this.loading = true;
    this.cities = [];
    this.cityService.search(name).subscribe(
        (data) => this.setValue(data),
        (error) => this.catchError(error)
    );
  }

  setValue(value: City[]): void {
      this.loading = false;
      this.noData = false;
      this.cities = value.slice(0, 6);
      this.checkInput();
  }

  catchError(error): void {
    this.noData = true;
    this.loading = false;
    this.cities = [];
    this.checkInput();
  }

  checkInput(): void {
      if (this.input == '') {
          this.loading = false;
          this.noData = false;
          this.cities = [];
      }
  }
}
