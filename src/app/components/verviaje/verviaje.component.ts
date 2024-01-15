import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Viajes } from 'src/app/interfaces/viajes';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-verviaje',
  templateUrl: './verviaje.component.html',
  styleUrls: ['./verviaje.component.scss'],
})
export class VerviajeComponent implements OnInit{

  viajes: Viajes[];
  
  constructor(public activatedRoute: ActivatedRoute,
    private router:Router, private fbservice:FirebaseService) {}

  ngOnInit(): void{
    this.fbservice.VerViaje().subscribe(viajes =>{
      this.viajes = viajes;
    })
  }
  
  async borrarViaje(viajes: Viajes){
    const response = await this.fbservice.EliminarViaje(viajes);
    console.log(response);
  }
}
