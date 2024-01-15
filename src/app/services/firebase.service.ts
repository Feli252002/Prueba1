import { Injectable, inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Viajes } from '../interfaces/viajes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore:Firestore){}

  AgregarViaje(Viajes: Viajes){
    const viajeRef = collection(this.firestore, 'viajes');
    return addDoc(viajeRef, Viajes);
  }

  VerViaje(): Observable<Viajes[]>{
    const viajeRef = collection(this.firestore, 'viajes');
    return collectionData(viajeRef, {idField: 'vID'}) as Observable<Viajes[]>;
  }

  EliminarViaje(viajes: Viajes){
    const viajeDocRef = doc(this.firestore, `viajes/${viajes.vID}`);
    return deleteDoc(viajeDocRef);
  }
}
