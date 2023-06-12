import { Injectable } from '@angular/core';
import { Empleado } from './empleado.component';

@Injectable({
  providedIn: 'root'
})
export class DatosEmpleadoService {

  constructor() { }

  array:Empleado[]=[

    new Empleado("José","Ordóñez","Presidente",8000),
    new Empleado("Sara","Castaño","Directora comunicación",7000),
    new Empleado("Pedro","Perez","Administrador",4500),
    
    
  ]

  agregarDatos(empleado:Empleado){
    this.array.push(empleado);
  }
}
