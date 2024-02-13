//Se crea este fichero manualmente
//Las pages web realmente son componentes
//El nombre es main-page porque es nuesto html principal
// y luego component.ts porque es la nomenclatura para definir componentes

import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

// Esto es para inyectar por dependendecias el service
// lo llamo dbzService a la variable de inyeccion
//Las buenas practica de programacion nos dice que los services deben ser privates, aunuqe sea mas comodo poneros public
  constructor ( private dbzService: DbzService) {}

  //Al hacerlo privado el Service, la aplicación deja de funcionar.
  // PAra arreglarlo y poder usar el service como private, tengo que hacer getters:
  // Este get me devuelve los personajes del Service
  // Asi, si tu modificas los charcaters qeu te pase este get, automaticamente se cambia el del WS
  get characters(): Character[] {
    //return this.dbzService.characters;
    //Si lo pones así, haces que lo que devuelves sea una copia, no modificas lo que haya en el Service
    return [...this.dbzService.characters];

  }

  //Al hacer privad oel service, necesito un metodo para borrar por id:
  onDeleteCharacter( id: string ): void {
    // Lo que hace es lanzar el metodo que ya existe en el propio service
    this.dbzService.deleteCharacterById(id);

  }


  onNewCharacter(character:Character): void {
    this.dbzService.addCharacter( character );
  }



}
