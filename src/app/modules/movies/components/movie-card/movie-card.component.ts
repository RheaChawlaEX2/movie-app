import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MovieConstants } from '../../constants/movies.constants';
import { MovieListData } from '../../model/movie-list-data.model';
import { ToggleWishListData } from '../../model/toggle-wishlist-data.model';
import { WishlistService } from '../../services/wishlist.service';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: MovieListData;
  @Output() movieDataEvent = new EventEmitter();

  imgSrc = MovieConstants.imgSrc;
  movieInWishlist !: boolean ;
  addMovieBtn = MovieConstants.addToWishListBtn;
  removeMovieBtn = MovieConstants.removeFromWishListBtn;
  listData !: ToggleWishListData;

  constructor(public wishlist: WishlistService) { }
  ngOnInit(): void {
    
  }

  ngAfterContentChecked() {
    this.isInWishList(this.movie)
  }
  addToWishlist(movie: MovieListData) {
    this.wishlist.addToLocalStorage(movie);
    this.isInWishList(this.movie)
    console.log(this.movieInWishlist)
  }
  removeFromWishlist(movie: MovieListData) {
    this.wishlist.removeFromLocalStorage(movie);
    this.isInWishList(this.movie)
    console.log(this.movieInWishlist)
  }

  isInWishList(movie: MovieListData) {
    this.wishlist.getWishListData().forEach((data: MovieListData) => {
      this.movieInWishlist = data.showId === movie.showId
    })
    
  }
}
