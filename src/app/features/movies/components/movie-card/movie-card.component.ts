import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';

import { MovieConstants } from '../../constants/movies.constants';
import { MovieListData } from '../../model/movie-list-data.model';
import { EventService } from '../../services/event.service';
import { WishlistService } from '../../services/wishlist.service';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit, AfterContentChecked {

  @Input() movie!: MovieListData;
  @Input() newMovie !: MovieListData;

  imgSrc = MovieConstants.imgSrc;
  isMovieInWishlist: boolean = false;
  addMovieBtn = MovieConstants.addToWishListBtn;
  removeMovieBtn = MovieConstants.removeFromWishListBtn;
  listData: MovieListData[] = [];
  closeWishListButtonClicked = false;

  constructor(public wishlist: WishlistService, public event: EventService) { }
  ngOnInit(): void {
    this.closeWishListButtonClicked = this.event.getStatus();
    this.wishlist.setWishListData();
    this.isMovieInWishlist = this.wishlist.isInWishList(this.movie);
  }
  addToWishlist(movie: MovieListData) {
    this.wishlist.addToLocalStorage(movie);
    this.isMovieInWishlist = true;
  }
  removeFromWishlist(movie: MovieListData) {
    this.isMovieInWishlist = false;
    this.wishlist.removeFromLocalStorage(movie);
  }
  ngAfterContentChecked(): void {
    if (this.event.getStatus()) {
      this.isMovieInWishlist = this.wishlist.isInWishList(this.movie);
    }
  }
}
