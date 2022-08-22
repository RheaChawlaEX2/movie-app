
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { TypeOptions } from '../../constants/movies.constants';
import { MovieListData } from '../../model/movie-list-data.model';
import { ToggleWishListData } from '../../model/toggle-wishlist-data.model';
import { MovieListService } from '../../services/movie-list.service';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent  {

  constructor(public movieListService: MovieListService) { }

  @ViewChild("searchbar")
  search !: ElementRef<any>;

  @ViewChild('check-list-spaces')
  list !: ElementRef<any>;

  @ViewChild("type")
  type !: ElementRef<any>;

  @ViewChild("checklist")
  checklist !: ElementRef<any>;

  @Input() movies!: ToggleWishListData[];

  name: string = "";
  order: string = "desc";
  typeFilter: string = "Movie";
  options = TypeOptions;
  isFilter: boolean = false;
  movieTitles !: Observable<any> ;
  movieData!: MovieListData[];

  autoSearch() {
    this.name = ""
    this.name += this.search.nativeElement.value;
    this.movieListService.setParams(this.name, this.typeFilter, this.order)
    this.movieTitles = this.movieListService.getAllMovies();
    this.movieListService.setUrl();   
  }

  setType(typeValue: any) {
      this.typeFilter = typeValue;
      this.movieListService.setParams(this.name, this.typeFilter, this.order)
  }

  sortByRelease() {
    this.order = "asc"
    this.movieListService.setParams(this.name, this.typeFilter, this.order);
    this.movieListService.setUrl();    
  }
   
 
  

}
