import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleados';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  empleadoList: Empleado[] = [
    { legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino', salario: 25000 },
    { legajo: 2, nombre: 'Roberto', apellido: 'Gomez', sexo: 'Masculino', salario: 45000 },
    { legajo: 3, nombre: 'Florencia', apellido: 'Loyola', sexo: 'Femenino', salario: 18000 },
    { legajo: 4, nombre: 'Mariano', apellido: 'Fernandez', sexo: 'Masculino', salario: 29000 },
    { legajo: 5, nombre: 'Nerissa', apellido: 'Torres', sexo: 'Femenino', salario: 37000 },
    { legajo: 6, nombre: 'Marcela', apellido: 'Fufe', sexo: 'Femenino', salario: 57000 },
  ]
  radioButtonSeleccionado = 'Todos';
  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados() {
    return this.empleadoList.length;
  }

  obtenerTotalFemeninos() {
    return this.empleadoList.filter(emp => emp.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos() {
    return this.empleadoList.filter(emp => emp.sexo === 'Masculino').length;
  }

  obtenerEmpleadosSeleccionados(radioSel : string):void{
    this.radioButtonSeleccionado = radioSel;
  }

}
