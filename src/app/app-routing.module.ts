import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GenerationsComponent} from "./components/generations/generations.component";
import {PokemonsComponent} from "./components/pokemons/pokemons.component";

const routes: Routes = [
  {path:'generation', component: GenerationsComponent},
  {path:'pokemon', component:PokemonsComponent},
  {path:'**', component:PokemonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
