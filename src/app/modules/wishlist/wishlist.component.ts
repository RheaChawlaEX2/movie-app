import { Component } from '@angular/core';
import { MovieListData } from 'src/app/features/movies/model/movie-list-data.model';
import { WishlistService } from 'src/app/features/movies/services/wishlist.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishListData!: MovieListData[];
  count = 0;
  removedMovieTitle!: string;
  constructor(public wishlist : WishlistService) { }

  ngOnInit(): void {
    this.wishListData = this.wishlist.getWishListData();
    this.count = this.wishListData.length;
  }

  removeMovieFromWishList(movie : MovieListData) {
    this.removedMovieTitle = movie.title;
    this.wishlist.removeFromLocalStorage(movie);
  }

  ngAfterContentChecked(): void {
    this.wishListData = this.wishlist.getWishListData();
    this.count = this.wishlist.getWishListData().length
  } 

}
