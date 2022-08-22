import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QUERY_PARAMS } from '../constants/movies.constants';
import { FilterData, MovieListData } from '../model/movie-list-data.model';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http: HttpClient) { }
  
  isFilter = false;
  url: string = '';

  initialData: FilterData = {
  search: "",
  type:  "",
  order: ""
}
  search: string = QUERY_PARAMS.search;
  type: string = QUERY_PARAMS.type;
  order: string = QUERY_PARAMS.order;
  filterObject: BehaviorSubject<FilterData> = new BehaviorSubject(this.initialData);
  filterObject$ = this.filterObject.asObservable()
  
  getAllMovies(): Observable<MovieListData> {
   
    return this.http.get<MovieListData>(this.setUrl())
  }
 
  setUrl() {
    
    if (this.isFilter) {
      this.url = `${environment.apiBaseUrl}&type=${this.type}&order=${this.order}&name=${this.search}`;
    }
    else {
      this.url = `${environment.apiBaseUrl}&pageSize=1000`;
    }

    return this.url;
  }
  checkFilter() {
    return this.isFilter;
  }
  setParams(searchFilter: string, typeFilter: string, orderFilter: string) {
    
    this.isFilter = true;
  this.filterObject.next({
    search: searchFilter,
    type: typeFilter.replace(" ", "%20"),
    order: orderFilter
  });
  
  this.search = searchFilter;
  this.type = typeFilter.replace(" ", "%20");
  this.order = orderFilter;
  }
  
}
