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

  // addNewToLocalStorage(newMovie: NewAddedMovie) {
  //   if (!this.isInWishList(newMovie)) {
  //     this.newAddedMovie.push(newMovie); 
  //     localStorage.setItem('wishListData', JSON.stringify(this.newAddedMovie));
  //     this.inList = true;
  //   }
    
  // }

  addToLocalStorage(movie: MovieListData) { 
    if (!this.isInWishList(movie)) {
      this.wishList.push(movie); 
      localStorage.setItem('wishListData', JSON.stringify(this.wishList));
      this.inList = true;
    }
  }
  removeFromLocalStorage(title: string) {
    localStorage.removeItem('wishListData')
    this.wishList = this.wishList.filter((data: MovieListData) => {
      return title !== data.title;
    })
    this.inList = false
    localStorage.setItem('wishListData', JSON.stringify(this.wishList));
  }

}

