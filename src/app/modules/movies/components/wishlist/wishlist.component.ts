import { Component, Input } from '@angular/core';
import { MovieListData } from '../../model/movie-list-data.model';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  constructor() { }

  @Input() movie!: MovieListData;


  
}
