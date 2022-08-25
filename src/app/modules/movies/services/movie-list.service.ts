import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { MovieConstants } from '../constants/movies.constants';
import {  FilterData, MovieListData } from '../model/movie-list-data.model';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  constructor(private http: HttpClient) { 
   
  }
 
  url = '';

  filters: FilterData = {
    search : "",
    type : "",
    order : ""
  }
  
 filteredData: MovieListData[] = [];

  movieList: MovieListData[] = [];

  

  getAllMovies(): Observable<MovieListData[]> {
    return this.http.get<MovieListData[]>(this.getUrl())
  }
  getUrl() {
    // if (this.checkFilters()) {
    //   this.url = `${environment.apiBaseUrl}&type=${this.type}&order=${this.order}&name=${this.search}`;
    // }
    // else {
      this.url = `${environment.apiBaseUrl}&pageSize=${MovieConstants.pageSize}`;
    // }
    return this.url;
  }

  checkFilters(){
    return (this.filters.search || this.filters.type || this.filters.order);
     
  }

  setFilter(filters: FilterData) {
    this.filters.search = filters.search;
    this.filters.type = filters.type;
    this.filters.order = filters.order;
  }
 
  setMovieList(movies: MovieListData[]) {
    this.movieList = movies;
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


  

}





