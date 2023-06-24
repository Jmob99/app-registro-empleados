import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.component';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { DatosEmpleadoService } from '../datos-empleado.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private datos:DatosEmpleadoService){}
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

  goHome(){

    this.router.navigate([""]);
  
  }
  
}
