import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentData } from '@firebase/firestore';
import { AgregarviajeComponent } from 'src/app/components/agregarviaje/agregarviaje.component';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: Usuarios;

  firebaseSvc = inject(FirebaseauthService);
  utilsSvc = inject(UtilsService);

  signOut(){
    this.firebaseSvc.signOut();
  }

  addViaje(){
    this.utilsSvc.presentModal({
      component: AgregarviajeComponent
    })
  }
  
  getUserInfo(uid: string) {
    let path = `Usuarios/${uid}`;

      this.firebaseSvc.getDocument(path).then((userData: DocumentData | undefined) => {
        if (userData){
          const user = userData as Usuarios;
          this.utilsSvc.saveInLocalStorage('Usuarios', user);
        }
      })
  }

  constructor(public activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  segmentChanged($event: any) {
    console.log($event);
    let direccion = $event.detail.value;
    this.router.navigate(['home/' + direccion])
  }
}
