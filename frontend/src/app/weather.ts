import {ConsolidatedWeather} from "./consolidated-weather";
import {Parent} from "./parent";
import {Source} from "./source";

export class Weather {
    consolidated_weather: ConsolidatedWeather[];
    time: string;
    sun_rise: string;
    sun_set: string;
    timezone_name: string;
    parent: Parent;
    sources: Source[];
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
    timezone: string;
}
