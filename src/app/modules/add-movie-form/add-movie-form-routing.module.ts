import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieFormComponent} from './add-movie-form.component';

const routes: Routes = [
  {
    path: '',
    component: AddMovieFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMovieFormRoutingModule { }