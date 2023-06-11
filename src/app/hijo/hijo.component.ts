import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.component';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input() empleadosEnlace:Empleado;
  @Input() indice:number;

  arrayCaracteristicas = [''];

  addCaracteristica(newCaracteristica: string) {
    this.arrayCaracteristicas.push(newCaracteristica);
  }
}
