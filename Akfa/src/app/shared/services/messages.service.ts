import { PersonnelForRegistrationDto } from './../../_interfaces/user/personnelForAdditionDto.model';

import { UserToGetDto } from './../../_interfaces/user/userToGetDto.model';
import { UserForRegistrationDto } from './../../_interfaces/user/userForRegistrationDto.model';
import { RegistrationResponseDto } from './../../_interfaces/response/registrationResponseDto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { UserForAuthenticationDto } from 'src/app/_interfaces/user/userForAuthenticationDto.model';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { UserPostDto } from 'src/app/_interfaces/user/userPostDto.model';
import { PostingResponseDto } from 'src/app/_interfaces/response/PostingResponseDto.model';
import { User } from 'src/app/Models/User';



@Injectable({
  providedIn: 'root'
})
export class MessagesService {



  constructor(private _http: HttpClient, private _envUrl: EnvironmentUrlService) { }
  getUserInbox(email : string)
  {
    return this._http.get<any>(this._envUrl.urlAddress + '/api/db/inbox/' + email);
  }

  getUserOutbox(email : string)
  {
    return this._http.get<any>(this._envUrl.urlAddress + '/api/db/outbox/' + email);
  }

  getMessageThread(uName : string, email : string){

    return this._http.get<any>(this._envUrl.urlAddress + '/api/db/thread/' + email +'/' + uName  );
  }
  sendMessage(username: string, Content: string, email : string)
  {
    return this._http.post<any>(this._envUrl.urlAddress + '/api/db/' + email + '/CreateMessage' , {RecipientrUsername: username, Content})
  }

}
