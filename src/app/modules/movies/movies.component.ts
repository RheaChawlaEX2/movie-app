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
  wishListData!: MovieListData[];
  movies$ !: Observable<MovieListData[]>;
  count = 0;
  filters!: FilterData;
 
  constructor(public wishlist: WishlistService, public movieListService: MovieListService) { }
  ngOnInit(): void {
    this.movies$ = this.movieListService.getAllMovies();
    this.wishListData = this.wishlist.getWishListData();
    this.count = this.wishListData.length;
  }
  // handlewishListData(movie: MovieListData) {
  //   if (!this.wishlist.isInWishList(movie)) {
  //     this.wishlist.addToLocalStorage(movie);
  //   }
  //   else {
  //     this.wishlist.removeFromLocalStorage(movie);
  //   }
  // }
  handleFilters(filter: FilterData) {
    this.filters = filter;
    this.movieListService.setFilter(this.filters)
  }
  ngAfterContentChecked(): void {
    this.wishListData = this.wishlist.getWishListData();
    this.count = this.wishlist.getWishListData().length
  } 
}
