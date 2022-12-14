import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { ToggleWishListData } from '../../model/toggle-wishlist-data.model';
import { MovieListService } from '../../services/movie-list.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent  {

  @Output() toggleListEvent = new EventEmitter;
  constructor(public movieListService: MovieListService, public wishlist: WishlistService) { }
  @Input() movies!: any;

  ngOnInit(): void { }
  
  handleMovieData(movies: ToggleWishListData) {
    this.toggleListEvent.emit(movies);
  }

}
