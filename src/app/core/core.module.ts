import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class CoreModule { }
