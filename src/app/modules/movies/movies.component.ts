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
export class MoviesComponent implements OnInit, AfterContentChecked{

  constructor( public wishlist: WishlistService, public movieListService: MovieListService) {}
 
  movieData!: ToggleWishListData[];
  movies !: Observable<any>;
  count = 0;
  setFilter !: FilterData;
  ngOnInit(): void {
    // this.movies = this.movieListService.getAllMovies();
    this.movieListService.filterObject.subscribe(() => {
      this.movies = this.movieListService.getAllMovies()
    });
  
  }

  handleMovieData(movies: ToggleWishListData) {
    if (!movies['in-wishlist']) {
      this.wishlist.addToWishList(movies);
    }
    else {
      this.wishlist.removeFromWishList(movies);
    }
  }

  ngAfterContentChecked(): void {
    this.movieData = this.wishlist.getWishListData();
    this.count = this.wishlist.getMovieCount()
    
  }
}
