import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { MovieCardListComponent } from './components/movie-card-list/movie-card-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MoviesComponent } from './movies.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [
    MovieCardListComponent,
    MovieCardComponent,
    WishlistComponent,
    MoviesComponent,
    MovieFilterComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    MoviesComponent,
  ],
})
export class MoviesModule { }
