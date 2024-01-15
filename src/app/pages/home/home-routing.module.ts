import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarviajeComponent } from 'src/app/components/agregarviaje/agregarviaje.component';
import { MisviajeComponent } from 'src/app/components/misviaje/misviaje.component';
import { VerviajeComponent } from 'src/app/components/verviaje/verviaje.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,

    children:[
      {
        path:'agregar',
        component: AgregarviajeComponent
      },
      {
        path:'modificar',
        component: MisviajeComponent
      },
      {
        path:'ver',
        component: VerviajeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
