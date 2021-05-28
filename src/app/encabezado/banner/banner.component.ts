import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  barrios:string[]=['Palermo','belgrano','Saavedra']
  horarios: string = ''

  obtenerHorarios(): void {
    this.horarios = 'Lunes a Viernes de 19hs - 21hs'
  }

}
