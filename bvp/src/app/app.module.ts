import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';
import { ListaModelosComponent } from './lista-modelos/lista-modelos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaCarrosComponent,
    ListaModelosComponent
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
