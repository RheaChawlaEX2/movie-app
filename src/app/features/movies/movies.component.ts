import { AfterContentChecked, Compiler, Component, ComponentFactoryResolver, ElementRef, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
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
  myComponent: any;
   
  constructor(public wishlist: WishlistService, public movieListService: MovieListService, private cfr: ComponentFactoryResolver, private compiler: Compiler, private inject: Injector) { }
  ngOnInit(): void {
    this.movies$ = this.movieListService.getAllMovies();
    this.wishListData = this.wishlist.getWishListData();
    this.count =  this.wishlist.getWishListData().length;
  }

  handleFilters(filter: FilterData) {
    this.filters = filter;
    this.movieListService.setFilter(this.filters)
  }

  lazyLoadedList() {
    this.buttonClicked = !this.buttonClicked;
    if (this.buttonClicked) {
      import('../../modules/wishlist/wishlist.module').then(({ WishlistModule }) => {
        this.compiler.compileModuleAsync(WishlistModule).then(moduleFactory => {
          const moduleRef = moduleFactory.create(this.inject);
          const componentFactory = moduleRef.instance.resolveComponent();
          const  instance  = this.wishlistComponent.createComponent(componentFactory,undefined,moduleRef.injector);
        });
      });
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
