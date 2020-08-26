import { Component, OnInit } from '@angular/core';
import { cliente } from '../models/cliente';
import { ClientesServices } from '../services/ClientesServices'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {
  loading = false;
  clientelist : cliente;
  idCliente :number;
  constructor(private clienteService:ClientesServices,
              private route:ActivatedRoute) { 
    this.idCliente = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cargarCliente()
    console.log(this.idCliente)
  }
  cargarCliente(){
   this.clienteService.cargarCliente(this.idCliente).subscribe(data =>{
     this.clientelist = data
     console.log(this.clientelist)
   })
  }
}
