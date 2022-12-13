import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Aprendiendo en Angular :D'; //funciona como los h1,2,3.... etc
  public mostrar_juegos: boolean = true;
  public descripcion: string ;

  constructor(){
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  ocultarJuegos(value: any){
    this.mostrar_juegos = value;
  }
}
