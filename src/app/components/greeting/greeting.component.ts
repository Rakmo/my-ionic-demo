import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { weather_api_key } from 'src/my-global-vars';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
})
export class GreetingComponent implements OnInit {
  greeting?: string;
  dateTime?: string;
  weather?: string;
  customerFirstName?: string = 'John';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.setGreeting();
    this.setCurrentDateTime();
    this.getWeather();
  }

  setGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 12) {
      this.greeting = `Good morning, ${this.customerFirstName}!`;
    } else if (currentHour >= 12 && currentHour < 18) {
      this.greeting = `Good afternoon, ${this.customerFirstName}!`;
    } else {
      this.greeting = `Good evening, ${this.customerFirstName}!`;
    }
  }

  setCurrentDateTime() {
    const currentDateTime = new Date();
    this.dateTime =
      currentDateTime.toDateString() +
      ' ' +
      currentDateTime.toLocaleTimeString();
  }

  getWeather() {
    // Replace 'API_KEY' with your actual API key
    const apiKey = weather_api_key;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=80021`;

    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

    this.http.get(apiUrl, { headers }).subscribe((data: any) => {
      this.weather = data.current.condition.text;
    });
  }
}
