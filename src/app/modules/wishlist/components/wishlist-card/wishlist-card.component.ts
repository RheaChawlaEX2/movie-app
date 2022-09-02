import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieConstants } from 'src/app/features/movies/constants/movies.constants';
import { MovieListData } from 'src/app/features/movies/model/movie-list-data.model';
import { EventService } from 'src/app/features/movies/services/event.service';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.css']
})
export class WishlistCardComponent {

  @Input() movie!: MovieListData;  
  @Output() deleteMovieEmitter = new EventEmitter();

  imgSrc = MovieConstants.imgSrc;

  constructor(public eventService: EventService){}

  removeFromWishList(movie: MovieListData) {
    this.eventService.isClicked();
    this.deleteMovieEmitter.emit(movie);
  }

}
