//Se crea este fichero manualmente
//Las pages web realmente son componentes
//El nombre es main-page porque es nuesto html principal
// y luego component.ts porque es la nomenclatura para definir componentes

import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {


  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 7000
  }];




  onNewCharacter( character: Character ):void {
    console.log('MainPage');
    console.log(character);
    //Mete el personaje del formulario en el listado al final
    this.characters.push(character);
  }

  //Eliminamos por id, que es el indice del listado
  onDeleteCharacter (index: number): void {
    console.log('Borro personaje: ' + index);
    this.characters.splice(index,1);
  }



}
