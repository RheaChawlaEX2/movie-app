import { Component, OnInit } from '@angular/core';
import { HomePageConstants } from '../../constants/home-page.constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  bannerImage = HomePageConstants.bannerImg;
  constructor() { }

  ngOnInit(): void {
  }


}
