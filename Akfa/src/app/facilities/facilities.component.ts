import { AuthenticationService } from './../shared/services/authentication.service';
import { ChangeDetectionStrategy, Component, OnInit, NgModule } from '@angular/core';
import { NbSearchService } from '@nebular/theme';
import { Facility } from '../Models/facility';
import { FacilityService } from '../shared/services/facility.service';
import { CommonModule } from '@angular/common';
import { User } from '../Models/User';
import { interval } from 'rxjs';

@Component({

  selector: 'app-facilities',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss'],
  styles: [`
    :host nb-tab {
      padding: 1.25rem;
    }
  `],

})

export class FacilitiesComponent  {

  facilities: User [];
  value = '';
  constructor(private searchService: NbSearchService, private facilityService : FacilityService, private _authService : AuthenticationService) {
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;})
   }


  loadFacilities(){
     this._authService.getUsers().subscribe(facilities =>{
      /* this.facilities = Facility; */
      this.facilities = facilities;
      /* console.log(this.facilities); */

    });
    /* console.log(this.facilities); */


  }
}
