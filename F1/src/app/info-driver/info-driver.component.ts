import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Drivers } from '../infodrivers.module';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';


@Component({
  selector: 'app-info-driver',
  templateUrl: './info-driver.component.html',
  styleUrls: ['./info-driver.component.css']
})
export class InfoDriverComponent {
  obs!: Observable <Drivers>
  data!: Drivers;
  url!:any;
  id!:string|undefined
  

  
 
constructor(private http  : HttpClient, private router:Router,private route :ActivatedRoute){
  
  
}
doSomething = (data : Drivers) => {
  this.data = data
  console.log(data)
}

ngOnInit(): void {
  this.route.paramMap.subscribe((params:ParamMap)=>{
    this.id =params.get("id")?.toString()
    if (this.id != null) { //se è diverso dal null allora esegui quello sotto
      this.obs = this.http.get<Drivers>(`https://ergast.com/api/f1/2023/drivers/${this.id}.json`)
      this.obs.subscribe(this.doSomething)
  }})
}

}

