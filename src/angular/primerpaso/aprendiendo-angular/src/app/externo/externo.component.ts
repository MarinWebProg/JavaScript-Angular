import { Component, OnInit } from '@angular/core';

//Servicios
import { PeticionesService } from '../service/peticiones.service';


@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})

export class ExternoComponent  implements OnInit{
  public user: any;
  public userId: any;
  public fecha: any;


  constructor(
    private  _peticionesService : PeticionesService
  ){
    this.userId = 1;
  }

  ngOnInit() {
    this.cargaUsuario();
    this.fecha = new Date();
  }

  cargaUsuario(){
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
      result => {
        console.log(result);
        this.user = result.data;
      },
      error => {
        console.log(<any> error);
      }
    );
  }

}
