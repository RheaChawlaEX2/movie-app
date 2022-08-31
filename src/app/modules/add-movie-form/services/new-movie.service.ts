import { Injectable } from '@angular/core';
import { NewAddedMovie } from '../models/new-movie.model';

@Injectable({
  providedIn: 'root'
})
export class NewMovieService {

  newMovie: NewAddedMovie[] = [];

  addNewMovies(movie:NewAddedMovie[] ) {
    if (movie.length > 1) {
      this.newMovie = movie;
    }
    else {
      this.newMovie.push(movie[0])
    }
    
    localStorage.setItem('added-movie', JSON.stringify(this.newMovie));
  }

  getAddedMovies() : NewAddedMovie[] | [] {
    return JSON.parse(localStorage.getItem('added-movie') || '[]');
  }




}
