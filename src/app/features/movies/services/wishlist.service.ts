import { Injectable } from '@angular/core';
import { NewAddedMovie } from '../../add-movie-form/models/new-movie.model';

import { MovieListData } from '../model/movie-list-data.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService  {
  constructor() { }
  wishList: MovieListData[] = [];
  newAddedMovie: NewAddedMovie[] = [];
  movieCount: number = 0;
  inList: boolean = false;
  

  
  setWishListData() {
    this.wishList = this.getWishListData()
  }

  getWishListData(): MovieListData[] {
    return JSON.parse(localStorage.getItem('wishListData') || '[]');
  }
  
  isInWishList(movie: MovieListData) :boolean{
    let list = this.wishList.filter((data: MovieListData) => {
      return data?.showId === movie?.showId;
    })
    if (list.length > 0) {
      return true
    }
    return false;
  }

  addToLocalStorage(movie: MovieListData) { 
    if (!this.isInWishList(movie)) {
      this.wishList.push(movie); 
      localStorage.setItem('wishListData', JSON.stringify(this.wishList));
      this.inList = true;
    }
  }
  removeFromLocalStorage(movie:MovieListData) {
    localStorage.removeItem('wishListData')
    this.wishList = this.wishList.filter((data: MovieListData) => {
      return movie.showId !== data.showId;
    })
    this.inList = false
    localStorage.setItem('wishListData', JSON.stringify(this.wishList));
  }

}

