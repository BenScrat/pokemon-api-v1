import {Pokeinfo} from "./pokeinfo";

export interface Pokemons {
  count:number;
  next:string;
  previous:string;
  results:Pokeinfo[];
}
