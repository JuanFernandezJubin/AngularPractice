import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  private key: string = '71fd4bae64c9eb786aa4e04a6023717a';
  private url: string = 'http://api.openweathermap.org/data/2.5/weather?appid=';
  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    return this.http.get(this.url + this.key + '&q=' + ciudad);
  }
}
