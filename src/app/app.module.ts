import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//se Kita para ejercicio de modulos.
//import { ContadorComponent } from './contador/contador/contador.component';

//se Kita porque se movieron a otra carpeta
// y se manejaran en un nuevo modulo.
// import { HeroeComponent } from './heroes/heroe/heroe.component';
// import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModulex } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent
    //ContadorComponent
    // HeroeComponent,          // <--- COMPONENTES
    // ListadoComponent 
    
  ],
  imports: [
    BrowserModule,
    HeroesModule,  //<----   MODULOS
    ContadorModulex  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
