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
  //Se pone input a la porpiedad que queremos rwecibir del exterior
  //Le estoy diciendo que mi componente PUEDE (o no) recibir una porpiedad llamada characterList
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
  //public onDelete: EventEmitter<number> = new EventEmitter();
  // Redefino el emitter para que devuelva un string, que ss el tipo del uuid id
  public onDelete: EventEmitter<string> = new EventEmitter();


  //onDeleteCharacter(index:number):void {
    // Cambiamos para borrar por id uuid, no por posicion
  onDeleteCharacter(id?: string):void {
    //console.log({index});
    // Usamos el emiter cread oarriba, y con la funcion emit, le pasamos el index del listado
    //Pasamod el index, porque luego se va a elimiar el presonaje por indice


    // Esto se pone para hacer que valide que el id tiene que venir relleno, si no no hace lo de borrar
    // Se hace para conseguir que la funcion retorna un string si hay id, y si no, undefined
    if (!id) return;

    console.log('id UUID: ', id);

    this.onDelete.emit(id);
  }


 }
