import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';

const routes: Routes = [ { path: 'pokemon/:path', component: PokemonTypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
