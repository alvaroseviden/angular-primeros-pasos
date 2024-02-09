import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

// El emiter este es para escuchar event ode que se cree u nuevo personaje con e lformulario, y que se regitr en
// el listado.
// Luego el teng oque poner lo de output para que se emita el valor
@Output()
public onNewCharacter: EventEmitter<Character> = new EventEmitter();



  public character: Character = {
    name: '',
    power: 0
  };


  emitCharacter(): void {

    //debugger;

    console.log(this.character);
    //Validamos que los personajes no tengan nombres vacios
    if ( this.character.name.length === 0 ) return;
    // Usamos el emiter cread oarriba, y con la funcion emit, le pasamos el character del formulario
    this.onNewCharacter.emit(this.character);

    //this.character.name = '';
    //this.character.power = 0;
    //Esta formaes mas eficiente
    this.character = {name: '', power: 0};
  }

}
