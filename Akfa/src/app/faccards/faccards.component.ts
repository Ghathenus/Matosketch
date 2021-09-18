import { User } from 'src/app/Models/User';
import { Component, Input, OnInit } from '@angular/core';
import { Facility } from '../Models/facility';

@Component({
  selector: 'app-faccards',
  templateUrl: './faccards.component.html',
  styleUrls: ['./faccards.component.css']
})
export class FaccardsComponent implements OnInit {
@Input () facility: User;
  constructor() { }

  ngOnInit(): void {
  }

}
