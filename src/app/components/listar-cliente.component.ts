import { Component, OnInit } from '@angular/core';
import { cliente } from '../models/cliente'
import { ClientesServices } from '../services/ClientesServices';
@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  listaCliente:cliente[]
  loading = false
  paginas =1
  constructor(private clienteServices:ClientesServices) { }
  filtro="";
  ngOnInit(): void {
    this.cargarClientes()
  }
  //funcion que carga los datos usando el servicio
  cargarClientes(){
    this.loading=true
    this.clienteServices.getListClientes().subscribe(data =>{
      this.loading =false
      this.listaCliente = data;
      console.log(this.listaCliente)
    });
  }
  delete(id:number){
      this.loading=true
    this.clienteServices.deleteCliente(id).subscribe(data=>{
      this.cargarClientes()
      this.loading =false

    })

  }
}

