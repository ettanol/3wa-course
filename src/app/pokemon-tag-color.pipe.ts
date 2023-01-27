import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTagColor'
})
export class PokemonTagColorPipe implements PipeTransform {

  transform(type: string): string {
    switch (type){
      case('Grass') : type = 'grass';
      break;
      case('Fire') : type = 'fire';
      break;
      case('Water') : type = 'water';
      break;
      case('Normal'): type = 'normal';
      break;
      case('Poison') : type = 'poison';
      break;
      case('Flying') : type = 'fly';
      break;
      case('Bug') : type = 'bug';
      break;
      case('Fairy'): type = 'fairy';
      break;
      case('Electric'): type = 'electric';
      break;
    }
    return type;
  }

}
