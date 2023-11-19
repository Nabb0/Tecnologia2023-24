import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-arma',
  templateUrl: './info-arma.component.html',
  styleUrls: ['./info-arma.component.css']
})
export class InfoArmaComponent { routeObs!: Observable<ParamMap>;
  arma : any;
  armaObs! : Observable<Object>;
  armaList : any;

  constructor(
    private route: ActivatedRoute,
    private http : HttpClient) { }
  
  ngOnInit(): void {
      //Ottengo l'observable che notifica le informazioni sulla route attiva
      this.routeObs = this.route.paramMap;
      this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let arma = params.get('path'); //Ottengo l'id dalla ParamMap
    console.log(arma); //Stampo su console
    if (arma != null) { //se è diverso dal null allora esegui quello sotto
      this.armaObs = this.http.get<any>(`https://valorant-api.com/v1/weapons/${arma}`) //va a prendere il json del tipo selezionato dal url con il numero del tipo
      this.armaObs.subscribe(this.dosomething)
    }
  }

  dosomething=(data: any)=>{
    this.armaList = data;
    console.log(this.armaList)
  }
}


