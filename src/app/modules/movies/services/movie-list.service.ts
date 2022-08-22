import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QUERY_PARAMS } from '../constants/movies.constants';
import { FilterData, MovieListData } from '../model/movie-list-data.model';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http: HttpClient) { }

  url = '';
  search ="";
  type = "";
  order= "";


  getAllMovies(): Observable<MovieListData> {
    return this.http.get<MovieListData>(this.getUrl())
  }

  getUrl() {
    if (this.search || this.type || this.order) {
      this.url = `${environment.apiBaseUrl}&type=${this.type}&order=${this.order}&name=${this.search}`;
    }
    else {
      this.url = `${environment.apiBaseUrl}&pageSize=1000`;
    }
    return this.url;
  }

  setParams(filters: FilterData) {
    this.search = filters.search;
    this.type = filters.type.replace(" ", "%20");
    this.order = filters.order;

  }
}
