




import { Injectable } from '@angular/core';


//Al instalarme UUID, puedo hacer esto:
// Ponemos el v4 porque l odice el profe
import {  v4 as uuid } from 'uuid';



import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {


  public characters: Character[] = [{
    //Es es el uuid v4 que hemos instalado para geneerar ids
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7000
  }];




//onNewCharacter( character: Character ):void {
  //lo de antes vale, pero si aplicamos desestructuracion, se queda asi
//onNewCharacter( {name, power}: Character ):void {
  // La desesctructuracion esta bien si hay pocos campos. Si hay muchos,
  // mejorLo vuelvo a poner bien, voy a hacerl ode otra forma, que se hace mas abajo
addCharacter( character: Character ):void {
    console.log('MainPage');
    console.log(character);
    //console.log(name);
    //console.log(power);



    //lo de antes vale, pero si aplicamos desestructuracion, se qued meor asi:
    //Quito la desestrucutacion, y uso el spread ... : esparce las propiedades de character en el nuevo objeto const
    const newCharacter : Character = {
      id: uuid(),
      //name: character.name,
      //power: character.power
      //name,
      //power
      ...character
    }


    //Mete el personaje del formulario en el listado al final
    //this.characters.push(character);
    this.characters.push(newCharacter);
  }

  //Eliminamos por id, que es el indice del listado
  //Nuevo: Comentamos esta funcion para usar la nueva, para borrar por iid uuid:
  /*onDeleteCharacter (index: number): void {
    console.log('Borro personaje: ' + index);
    this.characters.splice(index,1);
  }*/

  deleteCharacterById( id:string ) {
    // Borrar un character por un id
    // El filter lo que hace es:
    // Filtra el elemento character del array que cumpla la condicion de la funcion:
    // Filtra el elemento cuyo id sea distinto al enviado como parametro
    // El filter devuelve un nuevo array con todos los elementos originales salvo el filtrado,
    // que es el que queriamos borrar
    this.characters = this.characters.filter( character => character.id !== id );

  }







  constructor() { }

}
