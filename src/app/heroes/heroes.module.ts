import { NgModule } from "@angular/core";
import { ListComponent } from "./components/list/list.component";
import { HeroComponent } from "./components/hero/hero.component";
import { CommonModule } from "@angular/common";


//Si escribes a-module, te genera el esqueleto del modulo

@NgModule ({

  declarations: [
    HeroComponent,
    ListComponent
  ],


  exports: [
    HeroComponent,
    ListComponent
  ],

  //Esto se importa porque hace falta para user el ngIf dentro de los modulos hero y List
  imports: [
    CommonModule
  ]


})

export class HeroesModule {



}
