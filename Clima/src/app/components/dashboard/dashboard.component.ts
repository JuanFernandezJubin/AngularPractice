import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public imageUrl: string = 'https://image.flaticon.com/icons/png/512/1116/1116453.png';
  public ciudad: string = '';
  public temperatura: number = 0;
  public humedad: number = 0;
  public clima: string = '';
  public query: boolean = false;
  public loading: boolean = false;
  public mostrarError: boolean = false;

  constructor(private _climaService: ClimaService) { }

  ngOnInit(): void {
  }

  obtenerClima(): void {
    this.query = false;
    this.loading = true;
    this._climaService.getClima(this.ciudad).subscribe(data => {
      this.loading = false;
      this.query = true;
      this.temperatura = data.main.temp - 273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;
    }, err => {
      this.loading = false;
      console.log({ error: err })
      this.error();
    })
  }

  error():void{
    this.mostrarError = true;
    setTimeout(() =>{
      this.mostrarError = false;
    },3000)
  }

}
