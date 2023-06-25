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

  modificarDatos(id:number){
    let datosEmpleado:Empleado = this.array[id];
    return datosEmpleado;

  }

  actualizaEmpleado(indice:number, miEmpleado:Empleado){

    let encuentraEmpleado = this.array[indice];

    encuentraEmpleado.nombre = miEmpleado.nombre;
    encuentraEmpleado.apellido = miEmpleado.apellido;
    encuentraEmpleado.cargo = miEmpleado.cargo;
    encuentraEmpleado.salario = miEmpleado.salario;

  }
}
