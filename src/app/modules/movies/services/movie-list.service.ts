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
  constructor(private http: HttpClient) { 
   
  }
 
  url = '';
  search = "";
  type = "";
  order = "";


  getAllMovies(): Observable<MovieListData[]> {
    return this.http.get<MovieListData[]>(this.getUrl())
  }
  getUrl() {
    if (this.checkFilters()) {
      this.url = `${environment.apiBaseUrl}&type=${this.type}&order=${this.order}&name=${this.search}`;
    }
    else {
      this.url = `${environment.apiBaseUrl}&pageSize=${MovieConstants.pageSize}`;
    }
    return this.url;
  }

  checkFilters(){
    return (this.search || this.type || this.order);
     
  }

  setFilter(filters: FilterData) {
    this.search = filters.search;
    this.type = filters.type;
    this.order = filters.order;
  }

 

}





