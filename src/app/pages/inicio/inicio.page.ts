import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user={
    usuario:"",
    contrasena:""
  }

  field:string;
  constructor(public toastController:ToastController, private router:Router) { }

  ngOnInit() {
  }
  
  ingresar(){
    console.log(this.user);
    if (this.validateModel(this.user)) {
      this.presentToast('bottom','Bienvenido '+this.user.usuario);
      let navigationextras: NavigationExtras={
        state:{
          user: this.user
        }
      }
      this.router.navigate(['/home'],navigationextras);
    }else{
      this.presentToast('bottom','Falta: '+this.field, 3000)
    }
  }

  validateModel(model:any){
    for(var [key, value] of Object.entries(model)){
      if (value=="") {
        this.field=key
        return false;
      }      
    }
    return true;
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
