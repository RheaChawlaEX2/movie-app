import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }
   
  clickedStatus = false;

  isClicked() {
    this.clickedStatus = true;
  }

  
  
  getStatus() {
    return this.clickedStatus;
  }

}
