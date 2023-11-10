import { RouterModule, Routes } from "@angular/router";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { TipiPokemonComponent } from "./tipi-pokemon/tipi-pokemon.component";
import { NgModule } from "@angular/core";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";



const routes: Routes = [
  {path: "",component:TipiPokemonComponent},
  {path: "pokemon/:path",component:PokemonComponent},
  {path: "pokemon-details/:path",component:PokemonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
