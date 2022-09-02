import { Injectable } from '@angular/core';
import { MovieListData } from '../../movies/model/movie-list-data.model';

@Injectable({
  providedIn: 'root'
})
export class NewMovieService {

  newMovie: MovieListData[] = [];

  addNewMovies(movies:MovieListData[] ) {
    for (let movie of movies) {
      this.newMovie.push(movie)
      
    }
    localStorage.removeItem('added-movie')
    localStorage.setItem('added-movie', JSON.stringify(this.newMovie));
    }

    
   
  getAddedMovies(): MovieListData[] | [] {
    console.log(JSON.parse(localStorage.getItem('added-movie') || '[]'))
    return JSON.parse(localStorage.getItem('added-movie') || '[]');
  }
}
