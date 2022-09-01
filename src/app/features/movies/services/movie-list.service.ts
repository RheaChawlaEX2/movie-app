import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieConstants } from '../constants/movies.constants';
import { FilterData, MovieListData } from '../model/movie-list-data.model';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  constructor(private http: HttpClient) {} 
  url = '';
  movieList: MovieListData[] = [];
  filters: FilterData = {
    search : "",
    type : "",
    order : ""
  }
  getAllMovies(): Observable<MovieListData[]> {
    return this.http.get<MovieListData[]>(this.getUrl())
  }
  getUrl() {
      this.url = `${environment.apiBaseUrl}&pageSize=${MovieConstants.pageSize}`;
      return this.url;
  }
  setFilter(filters: FilterData) {
    this.filters.search = filters.search;
    this.filters.type = filters.type;
    this.filters.order = filters.order;
  }

  getMovieList() {
    return JSON.parse(localStorage.getItem('movieList') || '[]');
  }
  setMovieList(movies: MovieListData[]) {
    this.movieList = movies;
    localStorage.setItem('movieList', JSON.stringify(this.movieList))
  }
  applyFilters() {
    let newList: MovieListData[] = [];
    this.movieList.forEach((movie : MovieListData) => {    
      if (this.checkFilterConditions(movie)) {
        newList.push(movie);
      }   
    });
    return newList;    
  }
  checkFilterConditions(movie: MovieListData): boolean {
    let word = movie.title.toLowerCase();
    let searchWord = this.filters.search.toLowerCase();
    if (this.filters.type && this.filters.search) {     
      return word.startsWith(searchWord) && this.filters.type === movie.type
    }
    else {
      return this.filters.type ? this.filters.type === movie.type : this.filters.search ? word.startsWith(searchWord) : false;
    }
  }

  sortMovies(movies: MovieListData[]) {
    return movies.sort((a, b) => (a.releaseYear < b.releaseYear ? -1 : 1));
  }
  
}





