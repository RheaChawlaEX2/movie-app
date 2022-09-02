import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewMovieService } from 'src/app/features/add-movie-form/services/new-movie.service';

import { FilterData, MovieListData } from '../../model/movie-list-data.model';
import { EventService } from '../../services/event.service';
import { MovieListService } from '../../services/movie-list.service';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent implements OnInit, AfterContentChecked {

  @Input() movies: MovieListData[] = [];
  @Input() filters !: FilterData;
  @Input() removed!: string;
  @Output() toggleListEvent = new EventEmitter;
  movieArray: MovieListData[] = [];
  newMovieArray!: MovieListData[];
  clickedStatus = false;

  constructor(public movieListService: MovieListService, private newMovieService: NewMovieService, public event: EventService) { }
  ngOnInit() {
    this.newMovieArray = this.newMovieService.getAddedMovies();
    this.movies = this.newMovieArray.concat(this.movies)
    this.movieListService.setMovieList(this.movies);
    this.movieArray = this.movieListService.getMovieList();
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
    if (this.removed) {
      this.event.isClicked();
      this.clickedStatus = this.event.getStatus();
    }
  }

}
