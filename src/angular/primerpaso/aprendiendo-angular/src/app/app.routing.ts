//Importacion de modulos de ruteo de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";

//Array de rutas
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path:'zapatillas', component: ZapatillasComponent},
  {path:'videojuego', component: VideojuegoComponent},
  {path:'cursos', component: CursosComponent},
  {path:'cursos/:nombre/:followers', component: CursosComponent}, //Se pone /:[dato] para pasar parametros en la url
  {path: '**', component:HomeComponent}
];

//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const  routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
