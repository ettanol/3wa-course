import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  title: string = "Pokémon";
  slogan: string = "Gotta catch'em all!";

  searchString: string = '';
  typeString: string = '';

  filter(event: string) {
    this.searchString = event;
  }

  selectType(event: string) {
    this.typeString = event;
  }
}
