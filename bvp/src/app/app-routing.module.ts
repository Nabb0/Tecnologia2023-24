import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';

const routes: Routes = [
  {path: "",component:HomeComponent},
  {path: "carros/marcas",component:ListaCarrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
