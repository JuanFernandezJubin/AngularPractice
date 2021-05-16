import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  @Input() todos:number;
  @Input() masculino : number;
  @Input() femenino : number;
  radioButtonSeleccionado = 'Todos';
  @Output() countRadioButton = new EventEmitter<string>();

  constructor() { 
    this.todos = 0;
    this.masculino = 0;
    this.femenino = 0;
  }

  ngOnInit(): void {
  }

  radioButtonChange():void {
    this.countRadioButton.emit(this.radioButtonSeleccionado);
  }

}
