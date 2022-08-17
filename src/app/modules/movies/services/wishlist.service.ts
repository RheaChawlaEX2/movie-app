import { Injectable } from '@angular/core';

import { MovieListData } from '../model/movie-list-data.model';

import { ToggleWishListData } from '../model/toggle-wishlist-data.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishList: ToggleWishListData[] = [];
  movieCount: number = 0;
  inList !: boolean;
  count = 0;
  constructor() {}

  getWishListData(): ToggleWishListData[] {
    return this.wishList;
  }
  addToWishList(movie: ToggleWishListData) {
    if (!this.isInWishList(movie['movie-data'])) {
      this.wishList.push(movie);
      ++this.count;
      this.inList = this.isInWishList(movie['movie-data'])
    }    
  }
  removeFromWishList(movie: ToggleWishListData) {
      this.wishList = this.wishList.filter((data: ToggleWishListData) => {
        return movie['movie-data']["title"] != data['movie-data']["title"];
      })
    --this.count;   
    this.inList = this.isInWishList(movie['movie-data']);
  }
  isInWishList(movie: MovieListData) {
    for (let list of this.wishList) {
      this.inList = list['movie-data'] === movie;
    }
    return this.inList
  }
  getMovieCount(){
    return this.wishList.length;
  }
}

