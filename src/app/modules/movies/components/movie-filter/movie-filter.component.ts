
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { TypeOptions } from '../../constants/movies.constants';
import { FilterData, MovieListData } from '../../model/movie-list-data.model';
import { ToggleWishListData } from '../../model/toggle-wishlist-data.model';
import { MovieListService } from '../../services/movie-list.service';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent {
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
  @Output() filterEvent: EventEmitter<FilterData> = new EventEmitter<FilterData>();

  options = TypeOptions;
  isFilter: boolean = false;
  movieTitles !: Observable<any>;
  movieData!: MovieListData[];
  filters: FilterData = {
    search: "",
    type: "",
    order: ""
  }
  autoSearch() {
    this.filters.search = ""
    this.filters.search += this.search.nativeElement.value || '';
    this.filterEvent.emit(this.filters);
    this.movieTitles = this.movieListService.getAllMovies();
  }
  setType(typeValue: any) {
    this.filters.type = typeValue;
    this.filterEvent.emit(this.filters);
  }
  sortByRelease() {
    this.filters.order = "asc";
    this.filterEvent.emit(this.filters);
  }
}
