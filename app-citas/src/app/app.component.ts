import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listCitas: any[] = [];

  agregarCita(cita:any){
    this.listCitas.push(cita);
  }
  eliminarCitaDeLaLista(index:number){
    this.listCitas.splice(index,1);
  }
}
