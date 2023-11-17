import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Drivers } from '../infodrivers.module';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent {
  obs: Observable <Drivers>
  data!: Drivers;
  url!:any;
 
constructor(private http : HttpClient){
  this.obs = this.http.get<Drivers>("https://ergast.com/api/f1/2023/drivers.json")
  this.obs.subscribe(this.doSomething)
}
doSomething = (data : Drivers) => {
  this.data = data
  console.log(data)
}



}
