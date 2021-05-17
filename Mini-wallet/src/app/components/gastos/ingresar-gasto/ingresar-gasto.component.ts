import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {
  public nombreGasto: string;
  public cantidad: number;
  public formularioIncorrecto : boolean;
  public textoIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) { 
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textoIncorrecto = 'Gasto o cantidad incorrecta';
  }

  ngOnInit(): void {
  }

  agregarGasto():void{

    if(this.cantidad > this._presupuestoService.restante) {
      this.formularioIncorrecto = true;
      this.textoIncorrecto = 'La cantidad ingresada excede el restante';
      return;
    }

    if(this.nombreGasto === '' || this.cantidad <=0 ){
      this.formularioIncorrecto = true;
      this.textoIncorrecto = 'Gasto o cantidad incorrecta';
    } else {

      // Creamos el objeto
      const GASTO = {
        nombre : this.nombreGasto,
        cantidad : this.cantidad
      };

      // Enviamos el objeto a los subscriptores via subject
      this._presupuestoService.agregarGasto(GASTO);

      // Reseteamos formulario
      this.textoIncorrecto = 'Gasto o cantidad incorrecta';
      this.formularioIncorrecto = false;
      this.cantidad = 0;
      this.nombreGasto = '';
    }
  }

}
