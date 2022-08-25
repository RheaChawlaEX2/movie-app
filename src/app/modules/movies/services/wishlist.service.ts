import { Injectable } from '@angular/core';

import { MovieListData } from '../model/movie-list-data.model';
import { ToggleWishListData } from '../model/toggle-wishlist-data.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor() { }
  wishList: MovieListData[] = [];
  movieCount: number = 0;
  inList: boolean = false ;

  ngOnInit() {
    this.wishList = this.getWishListData();
  }
  

  getWishListData(): MovieListData[] {
    return JSON.parse(localStorage.getItem('wishListData') || '[]');
  }
  
  isInWishList(movie: MovieListData) {
    for (let i = 0; i < this.getWishListData().length; i++) {
       this.inList = this.getWishListData()[i].showId == movie.showId
    }
    return this.inList;
  }

  addToLocalStorage(movie: MovieListData) { 
   
    if (!this.isInWishList(movie)) {
      this.wishList.push(movie); 
      localStorage.setItem('wishListData', JSON.stringify(this.wishList));
      this.inList = true;
    }
    
    
  }
  removeFromLocalStorage(movie: MovieListData) {
    localStorage.removeItem('wishListData')
    this.wishList = this.wishList.filter((data: MovieListData) => {
      return movie.title !== data.title;
    })
    this.inList = false
    localStorage.setItem('wishListData', JSON.stringify(this.wishList));
  }

}

