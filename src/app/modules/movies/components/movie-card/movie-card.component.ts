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
  movieInWishlist!: boolean;
  addMovieBtn = MovieConstants.addToWishListBtn;
  removeMovieBtn = MovieConstants.removeFromWishListBtn;
  listData !: ToggleWishListData;

  constructor(public wishlist: WishlistService) { }

  ngOnInit(): void {
    this.movieInWishlist = this.wishlist.isInWishList(this.movie)
  }
  addToWishlist() {
    this.listData = { "movie-data": this.movie, "in-wishlist": this.wishlist.isInWishList(this.movie) }
    this.movieDataEvent.emit(this.listData)
    this.listData['in-wishlist'] = this.wishlist.isInWishList(this.movie);
    this.movieInWishlist = this.listData['in-wishlist'];

  }
  removeFromWishlist() {
    this.listData = { "movie-data": this.movie, "in-wishlist": this.wishlist.isInWishList(this.movie) }
    this.movieDataEvent.emit(this.listData)
    this.listData['in-wishlist'] = this.wishlist.isInWishList(this.movie)
    this.movieInWishlist = this.listData['in-wishlist']
  }

}
