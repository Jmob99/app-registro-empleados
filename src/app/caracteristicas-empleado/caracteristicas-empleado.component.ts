import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {


  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  addCaracteristicaEmpleado(value:string){
    this.caracteristicasEmpleados.emit(value);
  }

}
