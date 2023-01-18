import { Component, OnInit } from '@angular/core';

//Model
import { ContactoUsuario } from '../models/contacto.usuario';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  public usuario: ContactoUsuario;
  public show_data : any;

  constructor(){
    this.usuario = new ContactoUsuario('','','','')
  }

  ngOnInit(){

  }

  onSubmit(form:any){
    //console.log("Si se lanzo el submit :o");
    //form.reset();
    this.show_data = this.usuario
    console.log(this.show_data);
    //console.log(this.usuario);

  }
}
