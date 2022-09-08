import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent
{

    heroex : string[] = ['Thomas','Yudy','Miriam','Mauricio'];
    delheroe :  string = '' ;

    borrarHeroex() 
    {
      console.log("ctrl + space");
      //this.heroex.splice(2, 1);
      this.delheroe = this.heroex.shift() || '';
    }
    
}
