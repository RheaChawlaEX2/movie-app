import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieConstants } from '../../constants/movies.constants';
import { MovieListData } from '../../model/movie-list-data.model';
import { EventService } from '../../services/event.service';
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
