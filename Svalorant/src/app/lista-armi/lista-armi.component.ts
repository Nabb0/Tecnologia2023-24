import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Weapons } from '../Weapon.module';

@Component({
  selector: 'app-lista-armi',
  templateUrl: './lista-armi.component.html',
  styleUrls: ['./lista-armi.component.css']
})
export class ListaArmiComponent {
  obs: Observable <Weapons> ;
  data!: Weapons;
  url!:any;

  constructor(private http : HttpClient){
    this.obs = this.http.get<Weapons>("https://valorant-api.com/v1/weapons")
    this.obs.subscribe(this.doSomething)
  }

  doSomething = (data : Weapons) => {
    this.data = data
    console.log(data)
  }
  getLastPart(data: string){
    let url = data.split("/").slice(-2)
    console.log(url[0])
    return url[0]
  }
}

