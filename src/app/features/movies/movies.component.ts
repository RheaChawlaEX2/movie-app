import { AfterContentChecked, Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';

import { FilterData, MovieListData } from './model/movie-list-data.model';
import { MovieListService } from './services/movie-list.service';
import { WishlistService } from './services/wishlist.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterContentChecked{
  @ViewChild('movies') displayWishList!: ElementRef<any>;
  @ViewChild("wishlist", { read: ViewContainerRef })
  wishlistComponent!: ViewContainerRef;

  wishListData!: MovieListData[] ;
  movies$ !: Observable<MovieListData[]>;
  count = 0;
  filters!: FilterData;
  removedMovieTitle!: string;
  buttonClicked = false;
   
  constructor(public wishlist: WishlistService, public movieListService: MovieListService, private cfr: ComponentFactoryResolver) { }
  ngOnInit(): void {
    this.movies$ = this.movieListService.getAllMovies();
    this.wishListData = this.wishlist.getWishListData();
    this.count =  this.wishlist.getWishListData().length;
  }

  handleFilters(filter: FilterData) {
    this.filters = filter;
    this.movieListService.setFilter(this.filters)
  }

  async lazyLoadedList() {
   this.buttonClicked = this.buttonClicked ? false: true;
    if (this.buttonClicked) {
      this.wishlistComponent.clear()
    const { WishlistCardComponent } = await import('./components/wishlist-card/wishlist-card.component');

    const componentFactory = this.cfr.resolveComponentFactory(WishlistCardComponent);
    const componentInstance = this.wishlistComponent.createComponent(componentFactory);
    }
    else {
      this.wishlistComponent.clear()
    }
} 
  ngAfterContentChecked(): void {
    this.wishListData = this.wishlist.getWishListData();
    this.count = this.wishlist.getWishListData().length
  } 
  
}
