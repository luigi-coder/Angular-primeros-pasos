import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactoComponent } from './contacto/contacto.component';
import { MainComponent } from './main/main.component';
import { ServiciosComponent } from './servicios/servicios.component';


@NgModule({
    declarations: [
      MainComponent,
      ServiciosComponent,
      ContactoComponent
    ],
    exports: [
        MainComponent,
        ServiciosComponent,
        ContactoComponent
    ],
    imports: [
        CommonModule
    ]

})
export class CuerpoModule{

}