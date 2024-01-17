import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController} from '@ionic/angular';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { NavigationExtras, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-agregarviaje',
  templateUrl: './agregarviaje.component.html',
  styleUrls: ['./agregarviaje.component.scss'],
})
export class AgregarviajeComponent{

  
    /*field:string;
    regiones: any = [];
    comunas: any = [];
    formulario: FormGroup;

    constructor(
      private fbservice:FirebaseService,
      private router:Router,
      private http:HttpClient,
      public alertController: AlertController,
      public toastController:ToastController
      )
      {
        this.formulario = new FormGroup({
          region: new FormControl('', [Validators.required]),
          comuna: new FormControl('', [Validators.required]),
          capacidad: new FormControl('', [Validators.required, Validators.min(1), Validators.max(4)]),
          salida: new FormControl('', [Validators.required, Validators.min(0)]),
          precio: new FormControl('', [Validators.required, Validators.min(500)]),
        })
      }

      async onSubmit() {
        if (this.formulario.valid){
          console.log(this.formulario.value)
          const response = await this.fbservice.AgregarViaje(this.formulario.value);
          this.presentToast('bottom', 'Viaje agregado exitosamente', 2000);
          this.formulario.reset();
          let navigationextras: NavigationExtras={
          }
          this.router.navigate(['/home/ver'],navigationextras);
        }
      }

      ngOnInit(){
        this.getRegiones().subscribe(res =>{
          console.log("res", res)
          this.regiones = res;
        });
        this.getComunas().subscribe(res =>{
          console.log("res", res)
          this.comunas = res;
        });
      }

      getRegiones(){
        return this.http
        .get("assets/files/customers.json")
        .pipe(
          map((res:any) => {
            return res.regiones;
          })
        )
      }

      getComunas() {
    return this.http
      .get("assets/files/customers.json")
      .pipe(
        map((res: any) => {
          const comunas = res.regiones.reduce((acc: any, region: any) => {
            return acc.concat(region.comunas);
          }, []);
          return comunas;
        })
      );
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
    }*/

}
