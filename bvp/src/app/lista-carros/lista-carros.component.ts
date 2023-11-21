import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../models/carros.model';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.css']
})
export class ListaCarrosComponent {
  obs: Observable <Root> ;
  data!: Root;
  url!:any;

  constructor(private http : HttpClient){
    this.obs = this.http.get<Root>("https://parallelum.com.br/fipe/api/v1/carros/marcas")
    this.obs.subscribe(this.doSomething)
  }

  doSomething = (data : Root) => {
    this.data = data
    console.log(data)
  }

  getLastPart(data: string){
    let url = data.split("/").slice(-3)
    console.log(url[0])
    return url[0]
  }
}


