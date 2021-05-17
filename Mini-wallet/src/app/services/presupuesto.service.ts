import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
  public presupuesto: number;
  public restante: number;
  private gastos$ = new Subject<any>();

  constructor() {
    this.presupuesto = 0;
    this.restante = 0;
  }

  agregarGasto(gasto: any) {
    this.restante = this.restante - gasto.cantidad;
    //Todos los componentes subscriptos tendran actualizado dicho valor
    this.gastos$.next(gasto);
  }

  getGastos(): Observable<any> {
    return this.gastos$.asObservable();
  }
}
