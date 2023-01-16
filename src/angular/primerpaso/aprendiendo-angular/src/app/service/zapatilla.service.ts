import { Injectable } from '@angular/core'; //Siempre tenerlo al momento de crearlo, es para inyectarlo en los demas archivos que lo requieran
import { Zapatilla } from '../models/zapatilla';


//Es una forma para mandarlo a llamar donde se ocupe
@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>;

constructor() {
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

  getTexto(){
    return "Hola mundo desde un servicios"
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }

}
