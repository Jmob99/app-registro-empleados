import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatosEmpleadoService } from '../datos-empleado.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado.component';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent implements OnInit{

  constructor(private router:Router, private route:ActivatedRoute,  private datos:DatosEmpleadoService){}


  array:Empleado[]=[];
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  indice:number;

  ngOnInit():void {

    this.datos.array;
    this.indice = this.route.snapshot.params['id'];
    
    let employee:Empleado = this.datos.modificarDatos(this.indice);

    this.cuadroNombre = employee.nombre;
    this.cuadroApellido = employee.apellido;
    this.cuadroCargo = employee.cargo;
    this.cuadroSalario = employee.salario;



  }


  goHome(){

    this.router.navigate([""]);
  
  }
  
  actualizaEmpleado(){
    let miEmpleado= new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);

    this.datos.actualizaEmpleado(this.indice,miEmpleado);

   this.router.navigate([""]);
  }
}
