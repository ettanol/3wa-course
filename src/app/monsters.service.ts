import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { Pokemon } from 'src/app/pokemon.js';
// import POKEMONS from 'src/datas/mock-pokemon';

@Injectable({
  providedIn: 'root'
})
export class MonstersService {

  apiServer: string = "http://localhost:3000";
  pokemons: Pokemon[] = [];

  constructor(
    private http: HttpClient,
  ) {}

  getAllMonsters(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.apiServer}/pokemons`)
    .pipe(
      shareReplay(),
    );
  }

  // getAllMonstersLimited(maxPerPage: number, page: number) {
  //   let monstersList: Pokemon[] = [];
  //   let initialization = (page - 1) * 9;
  //   let lastIndex = initialization + maxPerPage - 1;
  //   this.getAllMonsters().subscribe(monsters => [...monstersList , ...monsters.slice(initialization, lastIndex)])
  //   console.log(...monstersList);
  //   return monstersList;
  // } 


  getAllMonstersLimited(maxPerPage: number, page: number) {
    return new Promise(resolve => {
      let monstersList: Pokemon[] = [];
      let initialization = (page - 1) * 9;
      let lastIndex = initialization + maxPerPage;
      this.getAllMonsters().subscribe(monsters =>{
        monstersList = monsters.slice(initialization, lastIndex)
        resolve(monstersList);
      })
    })
}

  getMonster(id : number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiServer}/pokemons/${id}`);
  }

  addMonster(pokemon: any): Observable<Pokemon> {
    let types = [];
    console.log(pokemon)
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    pokemon.picture = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`;
    types.push(pokemon.type1);
    pokemon.type2 !== "" && types.push(pokemon.type2);
    return this.http.post<Pokemon>(`${this.apiServer}/pokemons`, {...pokemon, types: types}, httpOptions);
  }

  updateMonster(pokemon: Pokemon, hp: number, cp: number, description: string): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    if(pokemon.hp !== 0) {pokemon.hp = hp};
    if(pokemon.cp !== 0) {pokemon.cp = cp};
    if(pokemon.description !== "") {pokemon.description = description};
    return this.http.put<Pokemon>(`${this.apiServer}/pokemons/${pokemon.id}`, {...pokemon}, httpOptions);
  }

  deleteMonster(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.delete<Pokemon>(`${this.apiServer}/pokemons/${pokemon.id}`)
  }

  getTypes(): string[] {

    let types: string[] = [];
    this.getAllMonsters().subscribe(monsters => {
      monsters.forEach(monster => {
        monster.types && monster.types.forEach(type => {
          if(type && !types.includes(type)) {
            types.push(type);
          }
        })
      })
    })
    return types;
  }

}
