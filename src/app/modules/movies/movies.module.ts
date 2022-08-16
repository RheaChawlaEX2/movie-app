import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardListComponent } from './components/movie-card-list/movie-card-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MoviesComponent } from './movies.component';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';




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
