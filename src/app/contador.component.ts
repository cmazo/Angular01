import { Component } from "@angular/core";

@Component(
{
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>

    <h1>{{1 + 2}}</h1>

    <button (click)="numero = numero + 1;">+1</button>
    <span>{{ numero }}</span>
    <button (click)="numero = numero - 1">-1</button> 

    <br>
    <br>
    <button (click)="sumar()">Sumar desde la funcion</button>
    <br>
    <br>
    <button (click)="acumular(-1)">Resta desde Acumular</button>
    <hr>

    <button (click)="acumular(numbase);">+{{numbase}}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-numbase)">-{{numbase}}</button>    
    `    
})

export class ContadorComponent
{
    title = 'Contador App!!';
    public numero:number = 10;
    public numbase:number = 5;
  
    sumar()
    {
      this.numero = this.numero + 1
    }
  
    acumular(valor: number)
    {
      this.numero += valor;
    }
}