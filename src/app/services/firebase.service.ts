import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Viajes } from '../interfaces/viajes';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  signIn(arg0: User) {
    throw new Error('Method not implemented.');
  }

  constructor(private fbstore:Firestore){}

  AgregarViaje(Viajes: Viajes){
    const viajeRef = collection(this.fbstore, 'viajes');
    return addDoc(viajeRef, Viajes);
  }

  VerViaje(): Observable<Viajes[]>{
    const viajeRef = collection(this.fbstore, 'viajes');
    return collectionData(viajeRef, {idField: 'vid'}) as Observable<Viajes[]>;
  }

  EliminarViaje(viajes: Viajes){
    const viajeDocRef = doc(this.fbstore, `viajes/${viajes.vid}`);
    return deleteDoc(viajeDocRef);
  }
}
