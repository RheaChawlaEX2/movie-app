import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FilterData, MovieListData } from '../../model/movie-list-data.model';
import { MovieListService } from '../../services/movie-list.service';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent implements OnInit, AfterContentChecked {
  
  @Input() movies: MovieListData[] = [];
  @Input() filters !: FilterData;
  @Output() toggleListEvent = new EventEmitter;
  movieArray: MovieListData[] = [];

  constructor(public movieListService: MovieListService) { }
  ngOnInit() {
    this.movieListService.setMovieList(this.movies);
    this.movieArray = this.movies;
  }
  ngAfterContentChecked() {
    if (this.filters?.order === 'asc') {
      this.movieArray = this.movieListService.sortMovies(this.movieArray)
    }
    if (this.filters?.search || this.filters?.type) {
      this.movieArray = [];
      this.movieListService.setFilter(this.filters);
      this.movieArray = this.movieListService.applyFilters();
    }
    else {
      this.movieArray = this.movies;
    }
  }
}
