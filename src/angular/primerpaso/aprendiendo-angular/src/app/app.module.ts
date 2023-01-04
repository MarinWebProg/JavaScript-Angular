import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //Se encargan los dos para poder iniciar el modulo
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [			//Es el apartado que carga los componentes(IMPORTANTE!!! -- siempre subir el componente creado)
    AppComponent,
      VideojuegoComponent,
      ZapatillasComponent,
      CursosComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
