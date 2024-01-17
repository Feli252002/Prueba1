import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-verviaje',
  templateUrl: './verviaje.component.html',
  styleUrls: ['./verviaje.component.scss'],
})
export class VerviajeComponent{

  /*viajes: Viajes[];*/
  
  constructor() {}

  /*ngOnInit(): void{
    this.fbservice.VerViaje().subscribe(viajes =>{
      this.viajes = viajes;
    })
  }
  
  async borrarViaje(viajes: Viajes){
    try {
      const response = await this.fbservice.EliminarViaje(viajes);
      console.log('Documento eliminado correctamente', response);
    } catch (error) {
      console.error('Error al intentar eliminar el documento', error);
    }
  }*/
}
