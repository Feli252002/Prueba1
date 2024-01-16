import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Viajes } from '../interfaces/viajes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

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
