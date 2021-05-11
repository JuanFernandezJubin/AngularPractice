import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // --------Interpolation with data bindind and property binding-------
  // name: string = 'Juan Ignacio';
  // placeholderText: string = 'Escriba algo aqui......';
  // disabledValue: boolean = true;
  // imageSrc: string= 'https://res.cloudinary.com/practicaldev/image/fetch/s--DYfpZirq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/990/1%2AOc2PsJ-QKOUG2I8J3HNmWQ.png';

  // constructor() {
  // setInterval(() => this.disabledValue = false, 3000)
  // }

  //--------- Event binding interpolation--------
  // text: string = 'Probando event binding'
  // changeText(): void {
  //   this.text = 'Cambiando';
  // }

  //--------Two way data binding ---------
  // texto: string = '';

  //----------NGFOR-----------
  listStudents: any[] = [
    { name: 'Tomas Gonzales', state: 'Aprobado' },
    { name: 'Juan Perez', state: 'Reprobado' },
    { name: 'Patricia Funes', state: 'Libre' },
    { name: 'Roberto Bolaños', state: 'Reprobado' },
    { name: 'Maria Antoñeta de las Nieves', state: 'Aprobado' },
    { name: 'Popeye Santos', state: 'Libre' },
  ];

  show: boolean = true;

  toogle(): void {
    this.show = !this.show;
  }
}
