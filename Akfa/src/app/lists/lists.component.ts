import { Video } from './../Models/Video';
import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSearchService } from '@nebular/theme';
import { User } from '../Models/User';
import { AuthenticationService } from '../shared/services/authentication.service';
import { UserService } from '../shared/services/user.service';
import { interval } from 'rxjs';




@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})

export class ListsComponent  {
  source = interval(1000);
  subscription = this.source.subscribe(val => this.loadVideos());
  videos: Video [];
  value = '';
  constructor(private searchService: NbSearchService, private facilityService : UserService, private _authService : AuthenticationService) {
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;})
   }
   ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadVideos(){
     this._authService.getVideos().subscribe(videos =>{
      /* this.facilities = Facility; */
      this.videos = videos;
      /* console.log(this.facilities); */

    });
    /* console.log(this.facilities); */


  }
}
