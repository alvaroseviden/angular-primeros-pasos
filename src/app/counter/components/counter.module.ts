import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';




//1. Creo el fichero counter.module.ts
//2. Lo declaro como moulo con el ngModule
//3. Pongo el fichero counter.componetn.ts en la ruta nueva
//4. Declaro en el ngModule de este fichero el CounterComponent
//5. Para exponer el CounterComponent al mundo exterior, lo ponemos en exports
//6. Para usarlo, en el app.module.ts, lo pones en la seccion imports (ahi es donde van los modulos)

//El tener muchos compoenentes en un mismo modulo te permite crear compoentes sin necesidad de declararlos en el app.module.ts
//Ya funcionaria solo a ltener declarado previamente el modulo

@NgModule({

    declarations: [
      CounterComponent
    ],

    exports:  [
      CounterComponent
    ]


})
export class CounterModule {



}
