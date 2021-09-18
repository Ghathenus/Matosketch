import { User } from 'src/app/Models/User';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PasswordConfirmationValidatorService } from '../shared/custom-validators/password-confirmation-validator.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import { UserService } from '../shared/services/user.service';
import { UserPostDto } from '../_interfaces/user/userPostDto.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  category = ['Question' , 'Problem'];
  private _returnUrl: string;
  selected : string = '';
  public postForm: FormGroup;
  public errorMessage: string = '';
  public showError: boolean;
  useremail : string;
  selectedCategory: string = 'Question';
  profile : User;


  constructor(private _authService: AuthenticationService,private userService:  UserService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    this.loadUser();
    this.useremail = localStorage.getItem('email');
    this.postForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      content: new FormControl(''),


    });
    this.postForm.get('confirm');
  }

  public validateControl = (controlName: string) => {
    return this.postForm.controls[controlName].invalid && this.postForm.controls[controlName].touched
  }

  selectChangeHandler (event: any) {
    //update the ui
    this.selectedCategory = event.target.value;
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.postForm.controls[controlName].hasError(errorName)
  }
  loadUser(){
    this.useremail = localStorage.getItem('email');
   this.userService.getUser(this.useremail).subscribe(profile => {
     this.profile = profile;
     console.log(this.profile);
   })
   /* this.userService.getUser(this.user.Email).subscribe(profile =>{
     this.profile = profile;
     console.log(this.profile);
   }) */
 }
  public UserPost = (postFormValue) => {
    this.showError = false;
    const formValues = { ...postFormValue };

    const post: UserPostDto = {
     Title: formValues.title,
     Description: formValues.description,
     Content: formValues.content,
     Category: this.selectedCategory,
      Author: this.profile.uName,
      AuthorEmail: this.useremail

    };
    console.log(post);
    this._authService.UserPost("api/feed/post", post)
    .subscribe(_ => {
      console.log("Successful post");
      this._router.navigate([this._returnUrl]);
    },
    error => {
      this.errorMessage = error;
      this.showError = true;
    })
  }
}
