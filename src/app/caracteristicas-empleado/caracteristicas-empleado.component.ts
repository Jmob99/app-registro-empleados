import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent {

  constructor(private miServicio:ServicioEmpleadosService){}

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  addCaracteristicaEmpleado(value:string){
    this.miServicio.muestraMensaje("Se añade nueva caracteristica al usuario ")
    this.caracteristicasEmpleados.emit(value);
  }

}
