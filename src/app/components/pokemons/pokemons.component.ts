import {Component, Inject} from '@angular/core';
import {Observable,BehaviorSubject, switchMap } from "rxjs";
import {Pokemons} from "../../models/pokemons";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  public pokemon$:Observable<Pokemons>;
  public url:string='https://pokeapi.co/api/v2/pokemon';
  private pageSubject = new BehaviorSubject<number>(0);
  public currentPage: number = 0;

  constructor(private http: HttpClient) {
    this.pokemon$ = this.pageSubject.pipe(
      switchMap(page => this.http.get<Pokemons>(`${this.url}?offset=${page * 20}&limit=20`))
    );
    this.loadPokemons();
  }
  loadPokemons(): void {
    this.pokemon$.subscribe();
  }
  goToPreviousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.pageSubject.next(this.currentPage);
    }
  }

  goToNextPage(): void {
    this.currentPage++;
    this.pageSubject.next(this.currentPage);
  }
}
