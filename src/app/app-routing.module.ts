import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarEditarClienteComponent } from './components/agregar-editar-cliente.component';
import { VerClienteComponent } from './components/ver-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente.component';


const routes: Routes = [
{path: 'agregar',component:AgregarEditarClienteComponent},
{path: 'editar/:id',component:AgregarEditarClienteComponent},
{path: 'ver/:id',component:VerClienteComponent},
{path: '', component:ListarClienteComponent,pathMatch:'full'},
{path: '**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
