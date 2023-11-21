import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';
import { ListaModelosComponent } from './lista-modelos/lista-modelos.component';

const routes: Routes = [
  {path: "",component:HomeComponent},
  {path: "carros/marcas",component:ListaCarrosComponent},
  {path: "carros/marcas/:path",component:ListaModelosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
