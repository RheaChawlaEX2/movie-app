import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewAddedMovie } from '../add-movie-form/models/new-movie.model';

import { FilterData, MovieListData } from './model/movie-list-data.model';
import { MovieListService } from './services/movie-list.service';
import { WishlistService } from './services/wishlist.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterContentChecked {
  wishListData!: MovieListData[] ;
  movies$ !: Observable<MovieListData[]>;
  count = 0;
  filters!: FilterData;
  removedMovieTitle!: string;
 
  constructor(public wishlist: WishlistService, public movieListService: MovieListService) { }
  ngOnInit(): void {
    this.movies$ = this.movieListService.getAllMovies();
    this.wishListData = this.wishlist.getWishListData();
    this.count = this.wishListData.length;
  }

  handleFilters(filter: FilterData) {
    this.filters = filter;
    this.movieListService.setFilter(this.filters)
  }

  removeMovieFromWishList(title: string) {
    this.removedMovieTitle = title;
    this.wishlist.removeFromLocalStorage(title);
  }

  addMovie() {
    console.log('clicked button');
  }
 
  ngAfterContentChecked(): void {
    this.wishListData = this.wishlist.getWishListData();
    this.count = this.wishlist.getWishListData().length
  } 
}
