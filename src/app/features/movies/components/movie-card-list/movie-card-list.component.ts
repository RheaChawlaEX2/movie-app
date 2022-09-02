import { AfterContentChecked, AfterViewChecked, Component, EventEmitter, Input, OnInit, Output, ViewChildrenDecorator } from '@angular/core';
import { NewAddedMovie } from 'src/app/features/add-movie-form/models/new-movie.model';
import { NewMovieService } from 'src/app/features/add-movie-form/services/new-movie.service';

import { FilterData, MovieListData } from '../../model/movie-list-data.model';
import { EventService } from '../../services/event.service';
import { MovieListService } from '../../services/movie-list.service';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent implements OnInit, AfterContentChecked, AfterViewChecked {
  
  @Input() movies: MovieListData[] = [];
  @Input() filters !: FilterData;
  @Input() removed!: string;
  @Output() toggleListEvent = new EventEmitter;
  movieArray: MovieListData[] = [];
  newMovieArray!: MovieListData[];
  clickedStatus = false;

  constructor(public movieListService: MovieListService, private newMovieService : NewMovieService, public event : EventService) { }
  ngOnInit() {
    this.newMovieArray = this.newMovieService.getAddedMovies();
    this.movieListService.setMovieList(this.movies.concat(this.newMovieArray));
    this.movieArray = this.movieListService.getMovieList();
    
    console.log(this.newMovieArray)
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

  ngAfterViewChecked(): void {
   
  }

  
}
