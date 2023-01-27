import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/pokemon.js';
import { MonstersService } from '../monsters.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges{
  title: string = "Pokédex";
  // pokemons and pokemon list
  pokemons: Pokemon[] = [];
  selectedPokemon: Pokemon | null = null;
  pokemonTypes : string[] = [];
  // pagination
  page: number = 1;
  maxPerPage: number = 9;
  totalNumberOfPokemons: number = 0;
  maxOfPagesArray: number[] = [];
  // binding
  @Input() search: string = "";
  @Input() type: string = "";
  @Output() pokemonList = new EventEmitter<Pokemon[]>();

  isAddAPokemonOpen: boolean = false;
  form: FormGroup;

  constructor(
    private monstersService : MonstersService,
    private fb: FormBuilder,
  ) {  
    this.form = this.fb.group({
    id: [0, Validators.required],
    name: ['', Validators.required],
    hp: [0, Validators.required],
    cp: [0, Validators.required],
    picture: [``],
    type1: ['', Validators.required],
    type2: [''],
    description: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    this.getPagination();
  }

  ngOnChanges(change: any): any {
    console.log(change);
    let filteredPokemon: Pokemon[] = this.pokemons;
    if(change.search && change.search.currentValue !== "") {
      this.monstersService.getAllMonsters().subscribe((pokemons: Pokemon[]) => {
        filteredPokemon = pokemons.filter(pokemon => pokemon.name.toLowerCase().startsWith(change.search.currentValue.toLowerCase()));
        return this.pokemons = filteredPokemon;
      })
    } else if(change.type && change.type.currentValue !== "") {
      this.monstersService.getAllMonsters().subscribe((pokemons: Pokemon[]) => {
        filteredPokemon = pokemons.filter(pokemon => pokemon.types.includes(change.type.currentValue))
        return this.pokemons = filteredPokemon;
      })
    } else {
      this.getAllMonstersLimited();
    };
  }

  getPagination() {
    this.monstersService.getAllMonsters()
    .subscribe(pokemons => {
      this.totalNumberOfPokemons = pokemons.length;
      this.pokemonList.emit(pokemons);
      this.createNumberOfPages();
      this.getAllMonstersLimited();
    })
    ;
  }

  changePage(event: any) {
    this.page = event.target.value;
    this.getAllMonstersLimited();
  }

  createNumberOfPages() {
    let maxOfPages = Math.ceil(this.totalNumberOfPokemons / this.maxPerPage);
    for(let i = 1; i <= maxOfPages; i++) {
      this.maxOfPagesArray.push(i);
    }
    return this.maxOfPagesArray;
  }

  async getAllMonstersLimited() {
    this.pokemons = await this.monstersService.getAllMonstersLimited(this.maxPerPage, this.page) as Pokemon[];
  }

  onSelect(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  openAddAPokemon() {
    this.isAddAPokemonOpen = !this.isAddAPokemonOpen;
  }

  AddPokemon() {
    this.monstersService.addMonster(this.form.value).subscribe();
    this.isAddAPokemonOpen = false;
    this.form.reset();
  }

  addToTeam($event: any) {
    console.log($event)
  }
}
