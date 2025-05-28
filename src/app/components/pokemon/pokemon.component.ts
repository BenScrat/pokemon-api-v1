import {Component, Inject, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Pokemon} from "../../models/pokemon";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit{

  @Input() url: string|undefined;
  public pokemon$: Observable<Pokemon>|undefined;


  constructor(
    @Inject(HttpClient) private http: HttpClient
  ) {}

  ngOnInit():void {
    if(this.url){
      this.pokemon$ = this.http.get<Pokemon>(this.url)
    }
  }
}
