import { Injectable } from '@angular/core';

import { MovieListData } from '../model/movie-list-data.model';
import { ToggleWishListData } from '../model/toggle-wishlist-data.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor() { }
  wishList: ToggleWishListData[] = [];
  movieCount: number = 0;
  inList !: boolean;
  count = 0;

  getWishListData(): ToggleWishListData[] {
    return this.wishList;
  }
  addToWishList(movie: ToggleWishListData) {
    if (!this.isInWishList(movie['movie-data'])) {
      this.wishList.push(movie);
      this.count++;
    }
    this.inList = true;
  }
  removeFromWishList(movie: ToggleWishListData) {
    this.wishList = this.wishList.filter((data: ToggleWishListData) => {
      return movie['movie-data'].title !== data['movie-data'].title;
    })
    this.count--;
    this.inList = false;
  }
  isInWishList(movie: MovieListData) {
    for (let list of this.wishList) {
      this.inList = list['movie-data']['title'] === movie['title'];
    }
    return this.inList;
  }
  getMovieCount() {
    return this.wishList.length;
  }
}

