import { Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent
implements OnInit{
  public titulo: string = 'Componente de zapatillas/tennis'
  public zapatillas: Array<Zapatilla>;

  constructor(){
    this.zapatillas=[
      new Zapatilla('Reebox clasicones', 'Reebox', 'Blanco', 80, true)
    ];
  }

  ngOnInit(){
    console.log('Escribe lo que ocupes');
  }

}
