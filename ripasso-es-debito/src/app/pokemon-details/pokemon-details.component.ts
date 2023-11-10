import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent {
  routeObs!: Observable<ParamMap>;
  pokemon : any;
  pokemonDetailsObs! : Observable<Object>;
  pokemonDetailsList : any;

  constructor(
    private route: ActivatedRoute,
    private http : HttpClient) { }
  
  ngOnInit(): void {
      //Ottengo l'observable che notifica le informazioni sulla route attiva
      this.routeObs = this.route.paramMap;
      this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let pokemonDetails = params.get('path'); //Ottengo l'id dalla ParamMap
    console.log(this.pokemonDetailsList); //Stampo su console
    if (pokemonDetails != null) { //se è diverso dal null allora esegui quello sotto
      this.pokemonDetailsObs = this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonDetails}`) //va a prendere il json del tipo selezionato dal url con il numero del tipo
      this.pokemonDetailsObs.subscribe(this.dosomething)
    }
  }

  dosomething=(data: any)=>{
    this.pokemonDetailsList = data;
    console.log(this.pokemonDetailsList)
  }

}

