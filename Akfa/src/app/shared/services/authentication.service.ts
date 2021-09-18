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
export class AuthenticationService {
  private _authChangeSub = new Subject<boolean>()
  public authChanged = this._authChangeSub.asObservable();


  constructor(private _http: HttpClient, private _envUrl: EnvironmentUrlService) { }

  private currentUserSource = new ReplaySubject<User>(1);
currentUser$ = this.currentUserSource.asObservable();

  public registerUser = (route: string, body: UserForRegistrationDto) => {
    return this._http.post<RegistrationResponseDto> (this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  }
 /*  public registerFacility = (route: string, body: FacilityForRegistrationDto) => {
    return this._http.post<RegistrationResponseDto> (this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  }
  public registerMrc = (route: string, body: MrcForRegistrationDto) => {
    return this._http.post<RegistrationResponseDto> (this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  } */
  public registerPersonnel = (route: string, body: PersonnelForRegistrationDto) => {
    return this._http.post<RegistrationResponseDto> (this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  }
  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this._authChangeSub.next(isAuthenticated);
  }
  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
  public loginUser = (route: string, body: UserForAuthenticationDto) => {
    return this._http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  }
  public UserPost = (route: string, body: UserPostDto) => {
    return this._http.post<PostingResponseDto> (this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  }
  getUser(email : string){

    return this._http.get<any>(this._envUrl.urlAddress + '/api/accounts/' + email  );
  }
  getUserbyName(name : string){

    return this._http.get<any>(this._envUrl.urlAddress + '/api/accounts/user/' + name  );
  }
  getUserbyFirstName(fname : string){

    return this._http.get<any>(this._envUrl.urlAddress + '/api/accounts/puser/' + fname  );
  }
  updateUser(email : string){
    return this._http.put(this._envUrl.urlAddress + '/api/accounts/' , email    );
  }
  getUsers(): Observable<any> {

    return this._http.get<any>(this._envUrl.urlAddress + '/api/accounts/allusers'  );
  }
  /* public GetUser = (route: string, body: UserToGetDto) => {
    return this._http.get<UserToGetDto> (this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  } */
  setCurrentUser(user : User) {
    this.currentUserSource.next(user);
  }

  getPhotos(userid : string): Observable<any> {

    return this._http.get<any>(this._envUrl.urlAddress + '/api/db/allphotos/'  + userid );
  }

  getVideo(userid : string): Observable<any> {

    return this._http.get<any>(this._envUrl.urlAddress + '/api/db/video/'  + userid );
  }
  getVideos(): Observable<any> {

    return this._http.get<any>(this._envUrl.urlAddress + '/api/db/videos') ;
  }


    logout(){
      localStorage.removeItem('user');
      this.currentUserSource.next === null;
    }

}
