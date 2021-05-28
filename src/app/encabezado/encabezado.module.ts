import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
    declarations: [
        NavComponent,
        BannerComponent
    ],
    exports: [
        BannerComponent,
        NavComponent
    ],
    imports: [
        CommonModule
    ]
})
export class EncabezadoModule{

}