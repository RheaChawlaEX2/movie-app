import { Injectable } from '@angular/core';
import { ToggleWishListData } from '../model/toggle-wishlist-data.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishList: ToggleWishListData[] = [];
  movieCount: number = 0;
  constructor() {}

  getWishListData(): ToggleWishListData[] {
    return this.wishList;
  }
  addToWishList(movie: ToggleWishListData) {
    this.wishList.push(movie);
    ++this.movieCount;
  }
  removeFromWishList(movie: ToggleWishListData) {
    this.wishList = this.wishList.filter((data: ToggleWishListData) => {
      return movie['movie-data']["title"] != data['movie-data']["title"];
    })
    --this.movieCount;
  }
  getMovieCount(){
    return this.movieCount;
  }
}

