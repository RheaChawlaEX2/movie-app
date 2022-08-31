import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMovieFormRoutingModule } from './add-movie-form-routing.module';
import { AddMovieFormComponent } from './add-movie-form.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';



@NgModule({
  declarations: [

    AddMovieFormComponent,
     MovieFormComponent
  ],
  imports: [
    CommonModule,
    AddMovieFormRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AddMovieFormComponent,
    MovieFormComponent
      
  ]
})
export class AddMovieFormModule { }
