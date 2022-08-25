
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { QUERY_PARAMS, TypeOptions } from '../../constants/movies.constants';
import { FilterData, MovieListData } from '../../model/movie-list-data.model';
import { ToggleWishListData } from '../../model/toggle-wishlist-data.model';
import { MovieListService } from '../../services/movie-list.service';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent {
 

  @ViewChild("searchbar")
  search !: ElementRef<any>;

  @ViewChild('check-list-spaces')
  list !: ElementRef<any>;

  @ViewChild("type")
  type !: ElementRef<any>;

  @ViewChild("checklist")
  checklist !: ElementRef<any>;

  @ViewChild('checkListSpaces')
  checkListSpaces !: ElementRef<any>;

  @Input() movies!: ToggleWishListData[];
  @Output() filterEvent: EventEmitter<FilterData> = new EventEmitter<FilterData>();

  options = TypeOptions;
  isFilter: boolean = false;
  movieTitles :MovieListData[] = [];
  filters: FilterData = QUERY_PARAMS;

   constructor(public movieListService: MovieListService) { }

  autoSearch() {
    this.filters.search = this.search.nativeElement.value || '';
    this.filterEvent.emit(this.filters);
    this.movieTitles = this.movieListService.applyFilters();
  }

  onMovieClick(event: any) {
    this.search.nativeElement.value = event;
    this.filters.search = event;
    this.filterEvent.emit(this.filters);
  }

  setType(typeValue: string) {
    this.filters.type = typeValue;
    if (typeValue === "All") {
      this.filters.type = ""
    }
    this.filterEvent.emit(this.filters);
  }
  sortByRelease() {
    this.filters.order = "asc";
    this.filterEvent.emit(this.filters);
  }

}
