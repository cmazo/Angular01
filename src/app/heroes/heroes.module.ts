import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations:
    [
        HeroeComponent,
        ListadoComponent      
    ],
    exports:
    [
        ListadoComponent
    ],
    imports:
    [
        //aki solo van modulos.
        //commonmodule, es para le manejo de *ngfor, *ngif
        CommonModule
    ]         
})



export class HeroesModule
{

}