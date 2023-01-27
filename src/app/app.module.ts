import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilterComponent } from './filter/filter.component';
import { PokemonTagColorPipe } from './pokemon-tag-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { FormComponent } from './form/form.component';
import { PaginationPipe } from './pagination.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    PokemonDetailComponent,
    NotFoundComponent,
    FilterComponent,
    PokemonTagColorPipe,
    BorderCardDirective,
    PokemonCardComponent,
    FormComponent,
    PaginationPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
