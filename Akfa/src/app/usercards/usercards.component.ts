import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'app-usercards',
  templateUrl: './usercards.component.html',
  styleUrls: ['./usercards.component.scss']
})
export class UsercardsComponent implements OnInit {
  @Input () user: User;
  constructor() { }

  ngOnInit(): void {
  }

}
