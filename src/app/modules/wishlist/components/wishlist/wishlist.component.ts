import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieConstants } from 'src/app/features/movies/constants/movies.constants';
import { MovieListData } from 'src/app/features/movies/model/movie-list-data.model';
import { EventService } from 'src/app/features/movies/services/event.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  @Input() movie!: MovieListData;  
  @Output() deleteMovieEmitter = new EventEmitter();

  imgSrc = MovieConstants.imgSrc;

  constructor(public eventService: EventService){}

  removeFromWishList(title: string) {
    this.eventService.isClicked();
    this.deleteMovieEmitter.emit(title);
  }

}
