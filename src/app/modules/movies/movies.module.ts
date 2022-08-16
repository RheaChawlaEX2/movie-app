import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardListComponent } from './compo/movie-card-list/movie-card-list.component';
import { MovieCardComponent } from './compo/movie-card/movie-card.component';
import { WishlistComponent } from './compo/wishlist/wishlist.component';
import { MoviesComponent } from './movies.component';
import { MovieFilterComponent } from './compo/movie-filter/movie-filter.component';




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
  ],
  exports: [
    MoviesComponent, 
  ]
})
export class MoviesModule { }
