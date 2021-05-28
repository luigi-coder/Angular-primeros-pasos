import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { FooterComponent } from './footer/footer.component';
import { EncabezadoModule } from './encabezado/encabezado.module';
import { CuerpoModule } from './cuerpo/cuerpo.module';

@NgModule({
  declarations: [
    AppComponent,
    
    FooterComponent
  ],
  imports: [
    BrowserModule,
    EncabezadoModule,
    CuerpoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
