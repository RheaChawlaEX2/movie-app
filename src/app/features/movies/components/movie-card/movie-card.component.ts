import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { NewAddedMovie } from 'src/app/features/add-movie-form/models/new-movie.model';

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
  @Input() newMovie !: NewAddedMovie;
  @Input() removedMovie : boolean = true;
  
  imgSrc = MovieConstants.imgSrc;
  isMovieInWishlist : boolean = false;
  addMovieBtn = MovieConstants.addToWishListBtn;
  removeMovieBtn = MovieConstants.removeFromWishListBtn;
  listData: MovieListData[] = [];
  closeWishListButtonClicked = false;

  constructor(public wishlist: WishlistService, public event: EventService){ }
  ngOnInit(): void {
    this.closeWishListButtonClicked = this.event.getStatus();
    this.wishlist.setWishListData();
    this.isMovieInWishlist = this.wishlist.isInWishList(this.movie);
  }
  
  addNewMovieToWishlist(newMovie: NewAddedMovie) {
    // this.wishlist.addNewToLocalStorage(newMovie);
    // this.isMovieInWishlist = true;
  }

  removeNewMovieFromWishlist(newMovie: NewAddedMovie) {
    this.wishlist.removeFromLocalStorage(newMovie.title);
    this.isMovieInWishlist = false;
  }

  addToWishlist(movie: MovieListData) {
    this.wishlist.addToLocalStorage(movie);
      this.isMovieInWishlist = true;
  }
  removeFromWishlist(movie: MovieListData ) {
    this.wishlist.removeFromLocalStorage(movie.title);
    this.isMovieInWishlist = false;
  }
  ngAfterContentChecked(): void {
    if (this.event.getStatus()) {
      this.isMovieInWishlist = this.wishlist.isInWishList(this.movie);
   }
  }

}
