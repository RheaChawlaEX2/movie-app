import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { MovieCardListComponent } from './components/movie-card-list/movie-card-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';

@NgModule({
  declarations: [
    MovieCardListComponent,
    MovieCardComponent,
    MoviesComponent,
    MovieFilterComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  exports: [
    MoviesComponent,
  ],
})
export class MoviesModule {}
