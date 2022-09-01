import { Component } from '@angular/core';
import { MovieListData } from 'src/app/features/movies/model/movie-list-data.model';
import { WishlistService } from 'src/app/features/movies/services/wishlist.service';


@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.css']
})
export class WishlistCardComponent {
  wishListData!: MovieListData[];
  count = 0;
  removedMovieTitle!: string;
  constructor(public wishlist : WishlistService) { }

  ngOnInit(): void {
    this.wishListData = this.wishlist.getWishListData();
    this.count = this.wishListData.length;
  }

  removeMovieFromWishList(title: string) {
    this.removedMovieTitle = title;
    this.wishlist.removeFromLocalStorage(title);
  }

  ngAfterContentChecked(): void {
    this.wishListData = this.wishlist.getWishListData();
    this.count = this.wishlist.getWishListData().length
  } 

}
