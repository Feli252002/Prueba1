import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-agregar-viaje',
  templateUrl: 'agregar-viaje.page.html',
  styleUrls: ['agregar-viaje.page.scss'],
})
export class AgregarViajePage{

user:any;

regiones:any[]=[
  {id:1,region:"Tarapacá"},
  {id:2,region:"Antofagasta"},
  {id:3,region:"Atacama"},
  {id:4,region:"Coquimbo"},
  {id:5,region:"Valparaíso"},
  {id:6,region:"O'Higgins"},
  {id:7,region:"Maule"},
  {id:8,region:"Biobío"},
  {id:9,region:"La Araucanía"},
  {id:10,region:"Los Lagos"},
  {id:11,region:"Aysén"},
  {id:12,region:"Magallanes"},
  {id:13,region:"Santiago"},
  {id:14,region:"Los Ríos"},
  {id:15,region:"Arica"},
  {id:16,region:"Ñuble"}
]

comunas:any[]=[
  {id:1,comuna:"Iquique"},
  {id:2,comuna:"Calama"},
  {id:3,comuna:"Vallenar"},
  {id:4,comuna:"Salamanca"},
  {id:5,comuna:"Rinconada"},
  {id:6,comuna:"Rancagua"},
  {id:7,comuna:"Talca"},
  {id:8,comuna:"Concepción"},
  {id:9,comuna:"Laja"},
  {id:10,comuna:"Villarrica"},
  {id:11,comuna:"Frutillar"},
  {id:12,comuna:"Lago Verde"},
  {id:13,comuna:"Punta Arena"},
  {id:14,comuna:"Providencia"},
  {id:15,comuna:"Los Lagos"},
  {id:16,comuna:"Yungay"}
]

viajes:any={
  zona:"",
  municipio:"",
  capacidad:"",
  salida:"",
  precio:""
};

  field:string;
  constructor(private activatedRoute: ActivatedRoute,
    private router:Router, public alertController: AlertController,
    public toastController:ToastController) {
      this.activatedRoute.queryParams.subscribe(params =>{
        if (this.router.getCurrentNavigation()?.extras.state) {
          this.user = this.router.getCurrentNavigation()?.extras.state?.["usuario"];
          console.log(this.user)
        }else{
          this.router.navigate(["/login"]);
        }
      });
    }

    agregar(){
      console.log(this.viajes);
      if (this.validateModel(this.viajes)) {
        this.presentToast('bottom','Se agrego el viaje exitosamente');
        let navigationextras: NavigationExtras={
          state:{
            viajes: this.viajes
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

  async presentAlert(titulo:string,message:string) {
    const alert = await this.alertController.create({
      header: titulo,      
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
