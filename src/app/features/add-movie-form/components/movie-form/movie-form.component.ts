import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieListData } from 'src/app/features/movies/model/movie-list-data.model';
import { MovieListService } from 'src/app/features/movies/services/movie-list.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  imgSrc: any[] = [];
  myForm = new FormGroup({
    file: new FormControl(),
    title: new FormControl(),
    releaseYear: new FormControl(),
    type: new FormControl(),
    rating: new FormControl()

  });
  formData!: MovieListData;
  @Output() counterEmitter = new EventEmitter();
  @Output() newMovieDataEmitter = new EventEmitter();
  counter = 1;
  showIdExt = 's';

  constructor(private fb: FormBuilder, public router: Router, private movieList: MovieListService) { }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      file: ['', Validators.required],
      title: ['', Validators.required],
      releaseYear: ['', Validators.required],
      type: ['', Validators.required],
      rating: ['']
    });
  }
  uploadFile(event: any) {
    for (var i = 0; i < event.target.files.length; i++) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.onload = (_event) => {
        this.imgSrc.push(reader.result);
      }
      console.log(this.imgSrc)
    }
  }
  removeMovieImg(img: string) {
    this.imgSrc = this.imgSrc.filter((image) => {
      return image != img;
    })
  }
  onSubmit(data: MovieListData) {
    if (!this.myForm.valid) {
      alert('Please fill all the required fields to add a movie!');
    }
    else {
      console.log(data);
      this.formData = {
        showId: `${this.showIdExt}${++this.movieList.getMovieList().length}`,
        imgSrc: this.imgSrc,
        title: data.title,
        releaseYear: data.releaseYear,
        rating: data.rating,
        type: data.type
      }
      this.newMovieDataEmitter.emit(this.formData);
    }
  }
  setCounter() {
    console.log(this.counter)
    this.counterEmitter.emit(++this.counter);
  }
}
