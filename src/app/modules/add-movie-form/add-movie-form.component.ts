import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieListData } from '../movies/model/movie-list-data.model';
import { NewAddedMovie } from './models/new-movie.model';
import { NewMovieService } from './services/new-movie.service';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css']
})
export class AddMovieFormComponent implements OnInit {

  constructor(public newMovieService : NewMovieService, private router: Router) { }
  formCounter: any = new Array(1);
  newMovies : MovieListData[] = []
  ngOnInit(): void {
  }

  addNewForm(count : number) {
    this.formCounter = new Array(count);
  }

  addNewMovie(movie: MovieListData) {
    this.newMovies.push(movie);
  }

  addMovieToStorage() { 
    this.newMovieService.addNewMovies(this.newMovies);
    this.router.navigateByUrl('')
  }

}
