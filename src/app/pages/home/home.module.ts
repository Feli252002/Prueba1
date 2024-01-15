import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { VerviajeComponent } from 'src/app/components/verviaje/verviaje.component';
import { AgregarviajeComponent } from 'src/app/components/agregarviaje/agregarviaje.component';
import { MisviajeComponent } from 'src/app/components/misviaje/misviaje.component';
 

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, VerviajeComponent, AgregarviajeComponent, MisviajeComponent]
})
export class HomePageModule {}
