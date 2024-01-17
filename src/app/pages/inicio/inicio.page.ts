import { Component, OnInit, inject } from '@angular/core';
import { DocumentData } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  firebaseSvc = inject(FirebaseauthService);
  utilsSvc = inject(UtilsService);

  formlogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })


  ngOnInit() {
  }

  async submit() {
    if (this.formlogin.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();
      this.firebaseSvc.signIn(this.formlogin.value as Usuarios).then(res => {
        this.getUserInfo(res.user.uid);
      }).catch(error => {
        console.log(error);
        this.utilsSvc.presentToast({
          message: 'Correo/usuario o contraseña incorrectas',
          duration: 2000,
          position: 'bottom',
          icon: 'alert-circle-outline'
        })
      }).finally(() => {
        loading.dismiss();
      })
    }
  }

  async getUserInfo(uid: string) {
    if (this.formlogin.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      let path = `Usuarios/${uid}`;

      this.firebaseSvc.getDocument(path).then((userData: DocumentData | undefined) => {
        if (userData){
          const user = userData as Usuarios;
          this.utilsSvc.saveInLocalStorage('Usuarios', user);
          this.utilsSvc.routerLink('/home');
          this.formlogin.reset();

          this.utilsSvc.presentToast({
            message: `Bienvenido ${user.name}`,
            duration: 1500,
            position: 'bottom',
            icon: 'person-circle-outline'
          })
        }
      }).catch(error => {
        this.utilsSvc.presentToast({
          message: error.message,
          duration: 2000,
          position: 'bottom',
          icon: 'alert-circle-outline'
        })
      }).finally(() =>{
        loading.dismiss();
      })

    }
  }
}
