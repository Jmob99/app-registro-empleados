import { Component } from '@angular/core';
import { Empleado } from './empleado.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de empleados';

  array:Empleado[]=[

    new Empleado("José","Ordóñez","Presidente",8000),
    new Empleado("Sara","Castaño","Directora comunicación",7000),
    new Empleado("Pedro","Perez","Administrador",4500),
    
    
  ]

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  enviar(){
    
   let miEmpleado= new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);

   this.array.push(miEmpleado);

  }

  retirar(){
    this.array.pop();
  }

}
