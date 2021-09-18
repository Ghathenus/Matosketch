import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Component, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { User } from '../Models/User';
import { EnvironmentUrlService } from '../shared/services/environment-url.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-uploadvideo',
  templateUrl: './uploadvideo.component.html',
  styleUrls: ['./uploadvideo.component.scss']
})
export class UploadvideoComponent  {

  @Input() profile : User;
uploader : FileUploader;
hasBaseDropzoneOver = false;
user : User;
useremail : string;

  constructor(private _envUrl: EnvironmentUrlService,private authenticationService: AuthenticationService) {
  this.authenticationService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
console.log(this.user);}

  ngOnInit(): void {
    this.initializeUploader();
    this.useremail = localStorage.getItem('email');
    console.log(this.useremail);
  }
  fileOverBase(e : any){
    this.hasBaseDropzoneOver = e ;
  }
  initializeUploader(){
    this.useremail = localStorage.getItem('email');
    const baseUrl  =  'https://localhost:5001/api/accounts/' + this.useremail;
    this.uploader = new FileUploader({

      url : baseUrl + '/add-video'  ,
      isHTML5 : true,
      allowedFileType :['video'],
      removeAfterUpload : true,
      autoUpload : false,
      maxFileSize : 10*1920*1080
    });
    this.uploader.onAfterAddingFile = (file) =>{
      file.withCredentials = false;
    }
    this.uploader.onSuccessItem=(item , response , status, headers) =>{
      if(response){
        const video = JSON.parse(response);
        this.user.video = video;

      }
    }
  }

}
