import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {EventosComponent} from "./pages/eventos/eventos.component";
import {ContactoComponent} from "./pages/contacto/contacto.component";
import {ContExtraComponent} from "./pages/cont-extra/cont-extra.component";
import {EventosPasadosComponent} from "./pages/eventos-pasados/eventos-pasados.component";
import {EventosProximosComponent} from "./pages/eventos-proximos/eventos-proximos.component";

const routes: Routes = [
  {
    path: 'contenido-extra',
    component: ContExtraComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'eventos-pasados',
    component: EventosPasadosComponent
  },
  {
    path: 'eventos-proximos',
    component: EventosProximosComponent
  },
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
