import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public titulo: string = 'Componente de cursos';
  public nombre: string= "";
  public followers: number = 0;

constructor(
  private _route: ActivatedRoute,
  private _router: Router
){}


ngOnInit(){
  //La propiedad que estamos recibiendo(parametros)
  this._route.params.subscribe((params: Params) => {
    //console.log(params);
    //this.nombre = params.nombre;
    // console.log(this.nombre);
    //console.log(typeof +params['followers']);
    this.nombre = params['nombre'];
    this.followers = +params['followers'];
  });
}//ngOnInit

redirigir(){
  this._router.navigate(['/zapatillas'])
}



}


