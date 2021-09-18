import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkersService {

  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();


  constructor() { }

  changeMessage(message: any) {
    console.log(message)
    this.messageSource.next(message)
  }


}
