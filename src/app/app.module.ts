import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './hijo/hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    CaracteristicasEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
