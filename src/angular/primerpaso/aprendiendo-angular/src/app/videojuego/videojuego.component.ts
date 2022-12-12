import { Component} from '@angular/core';

@Component({
  selector: 'videojuego', //que nombre o directiva que tendra el componente
  templateUrl: './videojuego.component.html', //aqui seria la direccion la plantilla que generamos, tambien podemos usar " `` " para escribir codigo html
  styleUrls: ['./videojuego.component.css'] // Este seria para llamar las ojas de estilo e igual qe templete se puede escribir el estilo con las comillas alrevez
})
export class VideojuegoComponent{
  public titulo: string;
  public listado: string;

  constructor(){
    this.titulo = "Un componente de videojuegos";

    this.listado = "Titulo de listados";
    console.log("Se ha cargado este componente de videojuegos");

  }
}
