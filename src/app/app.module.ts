import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarClienteComponent } from './components/agregar-editar-cliente.component';
import { NavbarComponent } from './components/navbar.component';
import { ListarClienteComponent } from './components/listar-cliente.component';
import { VerClienteComponent } from './components/ver-cliente.component';
//Serfvicios
import {ClientesServices} from '../app/services/ClientesServices';
import { FiltroClientePipe } from './pipe/filtro-cliente.pipe';
import { FiltroComponent } from './components/filtro.component'
@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarClienteComponent,
    NavbarComponent,
    ListarClienteComponent,
    VerClienteComponent,
    FiltroClientePipe,
    FiltroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    ClientesServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
