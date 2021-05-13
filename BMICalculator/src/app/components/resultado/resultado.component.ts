import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi : number;
  resultado: string;
  interpretacion: string;
  constructor(private route: ActivatedRoute) {
    //para capturar el valor por params: + para pasar a number y ! para que no sea nulo
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!
   }

  ngOnInit(): void {
    //Se ejecuta cuando inicia el primer ciclo de vida. cuando se crea el componente
    this.getResultado();
  }

  getResultado(){
    if(this.bmi >= 25){
      this.resultado = 'Exceso de Peso';
      this.interpretacion = 'Tienes un peso superior al normal';
    }else if(this.bmi >= 18.5){
      this.resultado = 'Normal';
      this.interpretacion = 'Todo perfecto';
    }else {
      this.resultado = 'bajo peso';
      this.interpretacion = 'Tienes un peso corporal mas bajo del normal';
    }
  }

}
