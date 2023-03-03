import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ContExtraComponent } from './pages/cont-extra/cont-extra.component';
import { FooterComponent } from './components/footer/footer.component';
import { EventosPasadosComponent } from './pages/eventos-pasados/eventos-pasados.component';
import { EventosProximosComponent } from './pages/eventos-proximos/eventos-proximos.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    EventosComponent,
    ContactoComponent,
    ContExtraComponent,
    FooterComponent,
    EventosPasadosComponent,
    EventosProximosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
