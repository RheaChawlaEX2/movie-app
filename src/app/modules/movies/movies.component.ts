import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FilterData, MovieListData } from './model/movie-list-data.model';
import { ToggleWishListData } from './model/toggle-wishlist-data.model';
import { MovieListService } from './services/movie-list.service';
import { WishlistService } from './services/wishlist.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterContentChecked {
  constructor(public wishlist: WishlistService, public movieListService: MovieListService) { }
  wishListData!: ToggleWishListData[];
  movies$ !: Observable<MovieListData[]>;
  count = 0;

  ngOnInit(): void {
    this.movies$ = this.movieListService.getAllMovies();
    
  }
  handlewishListData(movies: ToggleWishListData) {
    if (!movies['in-wishlist']) {
      this.wishlist.addToWishList(movies);
    }
    else {
      this.wishlist.removeFromWishList(movies);
    }
  }
  handleFilters(filter: FilterData) {
    this.movieListService.setFilter(filter);
    this.movies$ = this.movieListService.getAllMovies();
  }

  ngAfterContentChecked(): void {
    this.wishListData = this.wishlist.getWishListData();
    this.count = this.wishlist.getMovieCount()
  }
 
}
