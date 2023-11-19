import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './drivers/drivers.component';
import { InfoDriverComponent } from './info-driver/info-driver.component';

const routes: Routes = [
  {path: "",component:DriversComponent}, 
  {path: "driver/:id",component:InfoDriverComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
