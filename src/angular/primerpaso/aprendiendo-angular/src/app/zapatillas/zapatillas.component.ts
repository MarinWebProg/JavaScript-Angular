import { Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent
implements OnInit{
  public titulo: string = 'Componente de zapatillas/tennis';
  public zapatillas: Array<Zapatilla>;
  public marcas: string[];
  public color: string;
  public mi_marca: string;

  constructor(){
    this.mi_marca = "FILA"
    this.color = 'yellow';
    this.marcas = new Array();
    this.zapatillas=[
      new Zapatilla('Reebox clasicones', 'Reebox', 'Blanco', 70, true),
      new Zapatilla('Mike Walker TP', 'Mike', 'Negro', 180, true),
      new Zapatilla('Mike Walker TP 2', 'Mike', 'Negro', 180, true),
      new Zapatilla('Mike Walker TP 3', 'Mike', 'Negro', 180, false),
      new Zapatilla('Addudas 3', 'Addudas', 'Blanco', 90, false),
      new Zapatilla('Panss Skate 3', 'Panss', 'Blue', 120, true),
      new Zapatilla('Panss Skate 4', 'Panss', 'Red', 120, true)
    ];
  }

  ngOnInit(){
    console.log(this.zapatillas);
    this.getMarcas();
  }

  getMarcas(){
    this.zapatillas.forEach((zapatilla, index) => {

      if(this.marcas.indexOf(zapatilla.marca) < 0){
        this.marcas.push(zapatilla.marca);
        console.log(index);
      }
    });
  }

  getMarca(){
    alert(this.mi_marca);
  }
  addMarca(){
    this.marcas.push(this.mi_marca);
  }

  //Eventos en angular
  borrarMarca(index){

  }

}
