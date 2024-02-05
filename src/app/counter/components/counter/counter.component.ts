import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  //El simbolo `` permite hacerlo multilinea
  template: `

  <h3>Counter:{{counter}}</h3>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">RESET</button>
  <button (click)="increaseBy(-1)">-1</button>



  `,
})
export class CounterComponent {

  public title: string = 'Mi componente Counter';
  public counter: number = 10;

  increaseBy(value:number):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }

    constructor() {}
}



//Genero esta clase y lo declaro como Component. Se expoerta
//Tengo que declarar que se usa este componente class CounterComponent en app.mdule.ts
//Puedo usar luego el tag app-counter en el html y que pinte lo que tenga el componente



//Plantillas: Uso de de extension Angular snippets Version 13
// si poner a-component, te genera automaticamente una plantilla para hacer un componente
