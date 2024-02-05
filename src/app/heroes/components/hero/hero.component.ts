import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  //Los getters realmente se usan como propiedades, aunque sean métodos
  get capitalizedName () : string {
    return this.name.toUpperCase();
  }

//Esto sí es una funxión/metodo de typescript
  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    //Cambiar e lnombre a Spiderman
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;


   // document.querySelectorAll('h1')!.forEach ( element => {
   //   element.innerHTML = '<h1>Desde Angular</h1>'
   // })

  }


  //Puedes hacer funciones de Javascript Y NO TypesCript, pero ESCAPA al proceso de validación ae Angular.
  // Angular NO ESTA PENDIENTE de estos cambios que relice el código Javascrip: No actuaizará los cambios de nombre de una variable


}
