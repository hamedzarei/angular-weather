import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {WeatherDetailsComponent} from "./weather-details/weather-details.component";
import {WeatherComponent} from "./weather/weather.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'search/:keyword', component: SearchComponent },
    { path: 'weather/:woeid', component: WeatherDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
