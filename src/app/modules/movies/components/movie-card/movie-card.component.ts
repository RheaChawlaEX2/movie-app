import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MovieConstants } from '../../constants/movies.constants';
import { MovieListData } from '../../model/movie-list-data.model';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent  {

  @Input() movie!: MovieListData;
  @Output() movieDataEvent = new EventEmitter();
  imgSrc = "https://a0.muscache.com/im/pictures/54335902/8572cc9d_original.jpg";
  movieInWishlist: boolean = false;
  addMovieBtn = MovieConstants.addToWishListBtn;
  removeMovieBtn = MovieConstants.removeFromWishListBtn;
  constructor() { }

  addToWishlist() {
    this.movieDataEvent.emit({ "movie-data": this.movie, "in-wishlist": this.movieInWishlist })
    this.movieInWishlist = true;
  }
  removeFromWishlist() {
    this.movieDataEvent.emit({ "movie-data": this.movie, "in-wishlist": this.movieInWishlist })
    this.movieInWishlist = false;
  }
}
