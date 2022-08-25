import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FilterData, MovieListData } from '../../model/movie-list-data.model';
import { ToggleWishListData } from '../../model/toggle-wishlist-data.model';
import { MovieListService } from '../../services/movie-list.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent {
  constructor(public movieListService: MovieListService, public wishlist: WishlistService) { }
  @Input() movies: MovieListData[] = [];
  // @Input() isFilter: boolean = false;
  @Input() filters !: FilterData
  movieArray: MovieListData[] = [];
  @Output() toggleListEvent = new EventEmitter;
  
  ngOnInit() {
    this.movieListService.setMovieList(this.movies);
    this.movieArray = this.movies;
   
}

  ngAfterContentChecked() {
    if (this.filters?.search || this.filters?.type || this.filters?.order) {
      this.movieArray = [];
      console.log(this.filters)
      this.movieListService.setFilter(this.filters);
      this.movieArray = this.movieListService.applyFilters()
      if (this.filters.order === 'asc') {
        this.movieArray.sort((a, b) => (a.releaseYear < b.releaseYear ? -1 : 1));
      }
    }
    else {
      this.movieArray = this.movies;
    }  
  }

  handleMovieData(movies: ToggleWishListData) {
    this.toggleListEvent.emit(movies);
  }
}
