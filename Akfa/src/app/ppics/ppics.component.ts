import { AuthenticationService } from './../shared/services/authentication.service';
import { Profile } from './../Models/profile';
import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../Models/photo';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions, NgxGalleryModule } from '@kolkov/ngx-gallery';
import { User } from '../Models/User';
import { interval } from 'rxjs';

@Component({
  selector: 'app-ppics',
  templateUrl: './ppics.component.html',
  styleUrls: ['./ppics.component.scss']
})
export class PpicsComponent implements OnInit {
@Input() profile: User;
photos : Photo[];
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

  constructor(private _authService : AuthenticationService) { }

  ngOnInit(): void {
    this.loadPhotos();
    this.galleryOptions = [
      {
        width : '700px',
        height : '700px',
        imagePercent : 150,
        thumbnailsColumns: 10,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview : false
      }
    ]
this.galleryImages= this.getImages();
  }


  getImages(): NgxGalleryImage[]{
    const imageUrls = [];
    for (const photo of this.photos){
      imageUrls.push({
        small : photo?.url,
        medium : photo?.url,
        big : photo?.url
      })
    }
    return imageUrls;
  }


  loadPhotos(){
    this._authService.getPhotos(this.profile.id).subscribe(photos =>{
     /* this.facilities = Facility; */

     this.photos = photos;
     /* console.log(this.photos); */
     this.galleryImages= this.getImages();
   });
  /*  console.log(this.photos); */


 }

}
