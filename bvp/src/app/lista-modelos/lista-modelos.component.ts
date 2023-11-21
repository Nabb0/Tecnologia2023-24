import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { modelloresults } from '../models/modelos.model';

@Component({
  selector: 'app-lista-modelos',
  templateUrl: './lista-modelos.component.html',
  styleUrls: ['./lista-modelos.component.css']
})
export class ListaModelosComponent {
    routeObs!: Observable<ParamMap>;
  modello: any;
  modelloObs!: Observable<modelloresults>;
  modelloList!: modelloresults;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let modello = params.get('path'); //Ottengo l'id dalla ParamMap
    console.log(modello); //Stampo su console
    if (modello != null) { //se è diverso dal null allora esegui quello sotto
      this.modelloObs = this.http.get<modelloresults>(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${modello}/modelos`) //va a prendere il json del tipo selezionato dal url con il numero del tipo
      this.modelloObs.subscribe(this.dosomething)
    }
  }

  dosomething = (data: modelloresults) => {
    this.modelloList = data;
    console.log(this.modelloList)
  }
}