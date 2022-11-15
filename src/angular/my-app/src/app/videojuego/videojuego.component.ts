import { Component } from "@angular/core";

@Component({
  selector: 'videojuego',
  templateUrl:'./videojuego.component.html'
})

export class VideojuegoComponent{

  public titulo: string;
  public listado: string;

  constructor(){
    this.titulo = 'Componente de videojuegos';
    this.listado = 'Listado de lorem';

    console.log('Se ah cargado el componente');

  }
}
