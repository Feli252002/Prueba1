import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseauthService } from '../services/firebaseauth.service';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  firebaseSvc = inject(FirebaseauthService);
  utilsSvc = inject(UtilsService);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let usuarios = localStorage.getItem('user');
    
    return new Promise((resolve) =>{
      this.firebaseSvc.getAuth().onAuthStateChanged((auth) =>{
        if(auth){
          if(usuarios)
          resolve(true);
        }
        else{
          this.utilsSvc.routerLink('/inicio');
          resolve(false);
        }
      })
    });
  }
  
}
