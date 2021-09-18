import { User } from 'src/app/Models/User';
import { AuthenticationService } from './../shared/services/authentication.service';
import { Facility } from 'src/app/Models/facility';
import { ActivatedRoute } from '@angular/router';
import { FacilityService } from './../shared/services/facility.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../Models/profile';


@Component({
  selector: 'app-facililist',
  templateUrl: './facililist.component.html',
  styleUrls: ['./facililist.component.css'],

})
export class FacililistComponent implements OnInit {

facility : Profile;
  constructor(private facilityService : FacilityService, private route: ActivatedRoute, private _authService : AuthenticationService) { }

  ngOnInit(): void {
    this.loadFacility();
  }


loadFacility(){
  this._authService.getUserbyName(this.route.snapshot.paramMap.get('name')).subscribe(facility =>{
    this.facility = facility;
  })
}

}
