import { Component, Output, EventEmitter } from '@angular/core';
import { MonstersService } from '../monsters.service';
import { Types } from '../pokemonTypes';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent{

  types: string[] = [];
  public typeEnum = Types;

  @Output() search = new EventEmitter<string>();
  @Output() filterType = new EventEmitter<string>();

  constructor(
    private monstersService: MonstersService,
  ) {

  }

  onChange(event: any) {
    this.search.emit(event.target.value);
  }

  changeFilterType(event: any) {
    this.filterType.emit(event.target.value);
  }

}
