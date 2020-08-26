import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cliente } from '../models/cliente'


@Injectable({
  providedIn: 'root'
})
export class ClientesServices {
 myAppUrl   = 'http://localhost:8180'
 myApiUrl   = '/api/clientes/'

 httpOptions = { 
 headers: new HttpHeaders({
   'Content-type':'application/json'})
  
 }
 constructor( private http: HttpClient){}
 //Grilla Principal
  getListClientes():Observable<cliente[]>{
    return this.http.get<cliente[]>(this.myAppUrl+this.myApiUrl);

  }
  //Borra dato de la Base de Datos
  deleteCliente(id: number):Observable<cliente>{
    return this.http.delete<cliente>(this.myAppUrl+this.myApiUrl+id)
  }
  guardarCliente(cliente:cliente): Observable<cliente>{
    return this.http.post<cliente>(this.myAppUrl + this.myApiUrl, cliente, this.httpOptions)
  }
  cargarCliente(id: number):Observable<cliente>{
      return this.http.get<cliente>(this.myAppUrl + this.myApiUrl+ id)
  }
  actualizarCliente(id: number, cliente:cliente): Observable<cliente>{
      return this.http.post<cliente>(this.myAppUrl + this.myApiUrl,cliente, this.httpOptions)
  }
}