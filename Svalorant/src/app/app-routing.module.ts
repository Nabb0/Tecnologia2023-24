import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaAgentiComponent } from './lista-agenti/lista-agenti.component';
import { ListaArmiComponent } from './lista-armi/lista-armi.component';
import { InfoAgenteComponent } from './info-agente/info-agente.component';
import { InfoArmaComponent } from './info-arma/info-arma.component';

const routes: Routes = [
  {path: "",component:HomeComponent},
  {path:"agenti",component:ListaAgentiComponent},
  {path:"armi",component:ListaArmiComponent},
  {path:"agenti/:path",component:InfoAgenteComponent},
  {path:"armi/:path",component:InfoArmaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
