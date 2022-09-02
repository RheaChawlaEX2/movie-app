import { Component, EventEmitter, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieListData } from '../movies/model/movie-list-data.model';
import { MovieListService } from '../movies/services/movie-list.service';
import { NewMovieService } from './services/new-movie.service';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css']
})
export class AddMovieFormComponent implements OnInit {

  imgSrc!: string ;
  newMovieDataEmitter = new EventEmitter;
  formCounter: any = new Array(1);
  newMovies: MovieListData[] = []
  myForm = new FormGroup({
    file: new FormControl(),
    title: new FormControl(),
    releaseYear: new FormControl(),
    type: new FormControl(),
    rating:new FormControl()
  });
  formData!: MovieListData;
  constructor(public newMovieService : NewMovieService, private router: Router, private fb: FormBuilder, private movieListService: MovieListService) { }
  ngOnInit(): void {
    this.newMovies = this.newMovieService.getAddedMovies();
  }
  addNewForm(count : number) {
    this.formCounter = new Array(count);
  }
  addNewMovie(movie: MovieListData) {
    this.newMovies.push(movie);
    this.movieListService.addSingleMovie(movie);
  }
  addMovieToStorage() { 
    this.newMovieService.addNewMovies(this.newMovies);
    this.router.navigateByUrl('/movies')
  }
}
