import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MovieListData } from '../../model/movie-list-data.model';
import { ToggleWishListData } from '../../model/toggle-wishlist-data.model';
import { MovieListService } from '../../services/movie-list.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent {
  constructor(public movieListService: MovieListService, public wishlist: WishlistService) { }
  @Input() movies: MovieListData[] = [];
  @Output() toggleListEvent = new EventEmitter;
 
  handleMovieData(movies: ToggleWishListData) {
    this.toggleListEvent.emit(movies);
  }

 
}
