import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './components/generations/generations.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import {HttpClientModule} from "@angular/common/http";
import {CardModule} from "primeng/card";
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
