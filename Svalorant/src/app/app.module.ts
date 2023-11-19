import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaAgentiComponent } from './lista-agenti/lista-agenti.component';
import { ListaArmiComponent } from './lista-armi/lista-armi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaAgentiComponent,
    ListaArmiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
