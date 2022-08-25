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
  localStorageData !: ToggleWishListData[];

  ngOnInit() {
    // this.wishList = this.getWishListData();
  }
  

  getWishListData(): ToggleWishListData[] {
    return JSON.parse(localStorage.getItem('wishListData') || '[]');
  }
  
  isInWishList(movie: MovieListData) {
    for (let list of this.wishList) {
      this.inList = list['movie-data'].showId === movie.showId;
    }
    return this.inList;
  }
  getMovieCount() {
    return this.count;
  }

  
  addToLocalStorage(movie: ToggleWishListData) { 
  console.log("before add",this.isInWishList(movie['movie-data']))
    if (!this.isInWishList(movie['movie-data'])) {
      this.setWishListStatus(true, movie);
      this.wishList.push(movie);
      this.count++; 
      this.inList = true;
    }
    console.log(this.wishList)
    // localStorage.setItem('wishListData', JSON.stringify(this.wishList));
  }
  removeFromLocalStorage(movie: ToggleWishListData) {
    // localStorage.removeItem('wishListData')
    this.wishList = this.wishList.filter((data: ToggleWishListData) => {
      return movie['movie-data'].title !== data['movie-data'].title;
    })
    this.count--;
    this.inList = false;
    console.log(this.wishList)
    
    // localStorage.setItem('wishListData', JSON.stringify(this.wishList));
  }

  setWishListStatus(status: boolean, movie: ToggleWishListData) {
    movie['in-wishlist'] = status;
  }

}

