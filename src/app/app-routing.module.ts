import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './features/movies/movies.component';

const routes: Routes = [
  { path: '', redirectTo: "movies" ,pathMatch:'full'},
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/add', loadChildren:() => import('./features/add-movie-form/add-movie-form.module').then(m => m.AddMovieFormModule) } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
