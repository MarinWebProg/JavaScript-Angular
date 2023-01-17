import { Component, OnInit } from '@angular/core';

//Model
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  public usuario: ContactoUsuario;

  constructor(){
    this.usuario = new ContactoUsuario('','','','')
  }

  ngOnInit(){

  }

  onSubmit(){
    console.log("Si se lanzo el submit :o");
    console.log(this.usuario);

  }
}
