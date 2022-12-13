import { Component, OnInit,
DoCheck,OnDestroy} from '@angular/core';

@Component({
  selector: 'videojuego', //que nombre o directiva que tendra el componente
  templateUrl: './videojuego.component.html', //aqui seria la direccion la plantilla que generamos, tambien podemos usar " `` " para escribir codigo html
  styleUrls: ['./videojuego.component.css'] // Este seria para llamar las ojas de estilo e igual qe templete se puede escribir el estilo con las comillas alrevez
})
export class VideojuegoComponent implements OnInit,
DoCheck,OnDestroy{
  public titulo: string;
  public listado: string;



  constructor(){
    this.titulo = "Un componente de videojuegos";

    this.listado = "Titulo de listados";
    console.log("Se ha cargado este componente de videojuegos");

  }

  //Ese OnInit es simplemente una interfaz. Un «contrato» que obliga a cumplir una cierta estructura (en este caso, incluir el método ngOnInit()) a la clase que lo implementa.
  ngOnInit(){
    console.log('OnInit Corriendo!');
  }

  //Sirve para detectar y actuar sobre cambios que Angular no va a detectar por si mismo. Se llama también durante cada ciclo de detección de cambios, después de ngOnChanges().
  ngDoCheck(){
    console.log('DoCheck Corriendo!');
  }
  cambiarTitulo(){
    this.titulo = "Nuevo titulazo";
  }

  //Se llama solo una vez, justo antes de que Angular destruya el componente, y sirve para prevenir memory leaks, eliminando por ejemplo suscripciones a Observables e event handlers.
  ngOnDestroy(){
    console.log("OnDestroy exploto y erradico un componente");

  }
}
