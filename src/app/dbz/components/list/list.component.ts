import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  //PAra conseguir que se envie informacion desde el main page de formaluario para que cargue
  //esta lista de este compoenente, se usa el decrador input sobre una property
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]


  //onDelete = Index value: number
  // El emiter este es para escuchar event ode que se borre personaje con boton x, y que se actualice en
  // el listado.
  // Luego el teng oque poner lo de output para que se emita el valor
  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index:number):void {
    console.log({index});
    // Usamos el emiter cread oarriba, y con la funcion emit, le pasamos el index del listado
    //Pasamod el index, porque luego se va a elimiar el presonaje por indice
    this.onDelete.emit(index);
  }


 }
