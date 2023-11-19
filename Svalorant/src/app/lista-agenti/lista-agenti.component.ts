import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { agents } from '../agents.module';

@Component({
  selector: 'app-lista-agenti',
  templateUrl: './lista-agenti.component.html',
  styleUrls: ['./lista-agenti.component.css']
})
export class ListaAgentiComponent {

  obs: Observable <agents> ;
  data!: agents;
  url!:any;

  constructor(private http : HttpClient){
    this.obs = this.http.get<agents>("https://valorant-api.com/v1/agents")
    this.obs.subscribe(this.doSomething)
  }

  doSomething = (data : agents) => {
    this.data = data
    console.log(data)
  }

  getLastPart(data: string){
    let url = data.split("/").slice(-2)
    console.log(url[0])
    return url[0]
  }
}
