import { Component } from '@angular/core';
import { PokemonType } from '../type.module';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-tipi-pokemon',
  templateUrl: './tipi-pokemon.component.html',
  styleUrls: ['./tipi-pokemon.component.css']
})
export class TipiPokemonComponent {
  obs: Observable <PokemonType> ;
  data!: PokemonType;
  url!:any;

  constructor(private http : HttpClient){
    this.obs = this.http.get<PokemonType>("https://pokeapi.co/api/v2/type")
    this.obs.subscribe(this.doSomething)
  }

  doSomething = (data : PokemonType) => {
    this.data = data
  }

  getLastPart(data: string){
    let url = data.split("/").slice(-2)
    console.log(url[0])
    return url[0]
  }
}
