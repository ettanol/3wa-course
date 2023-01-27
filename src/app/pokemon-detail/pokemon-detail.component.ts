import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MonstersService } from '../monsters.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit{
  form: FormGroup;

  pokemon: Pokemon | null = null;
  isUpdateFormOpen: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private monstersService: MonstersService,
    private location: Location,
    private fb: FormBuilder,
    ) {
      this.form = this.fb.group({
        hp: [0],
        cp: [0],
        description: ['']
        });
    }
    
    ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.monstersService.getMonster(id).subscribe(pokemon => this.pokemon = pokemon)
  }

  addToTeam() {
    // this.monstersService.addToTeam().subscribe(); 
  }
  
  openUpdateForm() {
    this.isUpdateFormOpen = !this.isUpdateFormOpen;
  }

  updatePokemonInfo(pokemon: Pokemon) {
    const val = this.form.value;

    if(val.hp || val.cp || val.description && pokemon) {
      this.monstersService.updateMonster(pokemon, val.hp, val.cp, val.description).subscribe(() => this.back());
    }
  }

  deletePokemon() {
    if(this.pokemon) {
      if(confirm(`Are you sure to delete ${this.pokemon.name} ?`)) {
        this.monstersService.deleteMonster(this.pokemon).subscribe(() => this.back())
      }
    }
  }

  back() {
    this.location.back();
  }

}
