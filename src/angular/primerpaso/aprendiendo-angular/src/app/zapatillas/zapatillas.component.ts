import { Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

import { ZapatillaService } from '../service/zapatilla.service';


@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers: [ZapatillaService]
})
export class ZapatillasComponent
implements OnInit{
  public titulo: string = 'Componente de zapatillas/tennis';
  public zapatillas!: Array<Zapatilla>;
  public marcas: string[];
  public color: string;
  public mi_marca: string;

  constructor(
    private _zapatillaService : ZapatillaService
  ){
    this.mi_marca = "FILA"
    this.color = 'yellow';
    this.marcas = new Array();

  }

  ngOnInit(){
    //console.log(this.zapatillas);
    this.zapatillas = this._zapatillaService.getZapatillas();
    alert(this._zapatillaService.getTexto)
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
  borrarMarca(index: number){
    //delete this.marcas[indice];
    this.marcas.splice(index,1)
  }

  onBlur(){
    console.log("Tas afuera del input padrinoooo")
  }

  mostrarPalabra(){
    alert(this.mi_marca);
  }

}
