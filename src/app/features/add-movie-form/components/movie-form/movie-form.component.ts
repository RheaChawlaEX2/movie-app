import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  imgSrc : any ;
  msg = ''
  myForm = new FormGroup({
    file: new FormControl(),
    title: new FormControl(),
    releaseYear: new FormControl(),
    type: new FormControl(),
    rating:new FormControl()

  });
  formData!: MovieListData;

  @Output() counterEmitter = new EventEmitter();
  @Output() newMovieDataEmitter = new EventEmitter();
  counter = 1;
  // showId = 0;
  showIdExt = 's';
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, public router: Router, private movieList: MovieListService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      file:['', Validators.required],
      title:['', Validators.required],
      releaseYear: ['', Validators.required],
      type: ['', Validators.required],
      rating:['']
    });
  }
 
  uploadFile(event: any) {
    if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
      this.imgSrc = reader.result; 
      console.log(reader)
    }    
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
