import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './hijo/hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DatosEmpleadoService } from './datos-empleado.service';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Routes,RouterModule } from '@angular/router';
import { ActualizaComponent } from './actualiza/actualiza.component';


const appRoutes:Routes = [
  {path:'', component:HomeComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'quienes', component:QuienesSomosComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'actualiza/:id', component:ActualizaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
    ContactoComponent,
    ActualizaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, DatosEmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
