import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //Se encargan los dos para poder iniciar el modulo

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';

@NgModule({
  declarations: [		
    AppComponent,
      VideojuegoComponent,
      ZapatillasComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
