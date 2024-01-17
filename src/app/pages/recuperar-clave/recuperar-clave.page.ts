import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.page.html',
  styleUrls: ['./recuperar-clave.page.scss'],
})
export class RecuperarClavePage implements OnInit {

  firebaseSvc = inject(FirebaseauthService);
  utilsSvc = inject(UtilsService)

  formrecovery = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })


  ngOnInit() {
  }

  async submit() {
    if (this.formrecovery.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();
      this.firebaseSvc.sendRecoveryEmail(this.formrecovery.value.email ?? '').then(res => {
        this.utilsSvc.presentToast({
          message: 'Correo de recuperación enviado',
          duration: 2000,
          position: 'bottom',
          icon: 'mail-outline'
        })
        this.utilsSvc.routerLink('/inicio');
        this.formrecovery.reset();
      }).catch(error => {
        console.log(error);
        this.utilsSvc.presentToast({
          message: 'Correo no registrado',
          duration: 2000,
          position: 'bottom',
          icon: 'alert-circle-outline'
        })
      }).finally(() => {
        loading.dismiss();
      })
    }
  }
}
