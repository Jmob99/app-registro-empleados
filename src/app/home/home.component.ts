import { Component } from '@angular/core';
import { Empleado } from '../empleado.component';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { DatosEmpleadoService } from '../datos-empleado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titulo = 'Lista de empleados';

  constructor(private miServicio:ServicioEmpleadosService, private datos:DatosEmpleadoService){

    this.array= this.datos.array;
  }


  array:Empleado[]=[];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  enviar(){
    
    let miEmpleado= new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.miServicio.muestraMensaje("Se agrega un nuevo empleado " + miEmpleado.nombre);
    this.datos.agregarDatos(miEmpleado);

  }

  retirar(){
    this.array.pop();
  }



}
