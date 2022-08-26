import { Component, Input, OnInit } from '@angular/core';

import { MovieConstants } from '../../constants/movies.constants';
import { MovieListData } from '../../model/movie-list-data.model';
import { WishlistService } from '../../services/wishlist.service';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: MovieListData;
  
  imgSrc = MovieConstants.imgSrc;
  isMovieInWishlist : boolean = false;
  addMovieBtn = MovieConstants.addToWishListBtn;
  removeMovieBtn = MovieConstants.removeFromWishListBtn;
  listData : MovieListData[] = [];

  constructor(public wishlist: WishlistService) { }
  ngOnInit(): void {
    this.wishlist.setWishListData();
    this.isMovieInWishlist = this.wishlist.isInWishList(this.movie)
  }

  addToWishlist(movie: MovieListData) {
    this.wishlist.addToLocalStorage(movie);
      this.isMovieInWishlist = true;
  }
  removeFromWishlist(movie: MovieListData) {
    this.wishlist.removeFromLocalStorage(movie);
    this.isMovieInWishlist = false;
  }

}
