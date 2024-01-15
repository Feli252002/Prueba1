import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController} from '@ionic/angular';

import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarviaje',
  templateUrl: './agregarviaje.component.html',
  styleUrls: ['./agregarviaje.component.scss'],
})
export class AgregarviajeComponent{

  
    field:string;
    formulario: FormGroup;

    constructor(private fbservice:FirebaseService, private router:Router,
      public alertController: AlertController, public toastController:ToastController)
      {
        this.formulario = new FormGroup({
          region: new FormControl(),
          comuna: new FormControl(),
          capacidad: new FormControl(),
          salida: new FormControl(),
          precio: new FormControl(),
        })
      }

      async onSubmit() {
        console.log(this.formulario.value)
        const response = await this.fbservice.AgregarViaje(this.formulario.value);
        console.log(response);
      }

      async presentToast(position: 'top' | 'middle' | 'bottom',
                       message: string,
                       duration?:number) {
      const toast = await this.toastController.create({
        message: message,
        duration: duration?duration:2500,
        position: position,
      });
  
      await toast.present();
    }

}
