import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieFormComponent } from './modules/add-movie-form/add-movie-form.component';
import { MoviesComponent } from './modules/movies/movies.component';

const routes: Routes = [
  { path: '', component: MoviesComponent},
  { path: 'movie-form', loadChildren:() => import('./modules/add-movie-form/add-movie-form.module').then(m => m.AddMovieFormModule) } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
