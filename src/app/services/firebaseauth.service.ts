import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
import { Usuarios } from '../interfaces/usuarios';
import { getFirestore, setDoc, getDoc, doc } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {
  getAuthState() {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilsSvc = inject(UtilsService);

  signIn(user: Usuarios){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  getAuth(){
    return getAuth();
  }

  signOut(){
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerLink('/inicio')
  }

  sendRecoveryEmail(email: string){
    return sendPasswordResetEmail(getAuth(),email);
  }
  
  setDocument(path: string, data: any){
    return setDoc(doc(getFirestore(), path), data);
  }

  async getDocument(path: string){
    return (await getDoc(doc(getFirestore(), path))).data();
  }

}
