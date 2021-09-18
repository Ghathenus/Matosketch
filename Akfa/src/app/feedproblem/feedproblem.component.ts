import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { NewsRss } from '../feed/news-rss';
import { AuthenticationService } from '../shared/services/authentication.service';
import * as xml2js from "xml2js";
@Component({
  selector: 'app-feedproblem',
  templateUrl: './feedproblem.component.html',
  styleUrls: ['./feedproblem.component.scss']
})
export class FeedproblemComponent implements OnInit {
  loggedIn : boolean;
  source = interval(1000);
  subscription = this.source.subscribe(val => this.GetRssFeedData());
  public isUserAuthenticated: boolean;
  RssData: NewsRss;
  constructor(private http: HttpClient, private _authService: AuthenticationService) {}
  ngOnInit() {
    this.GetRssFeedData();
    this._authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
      this.loggedIn = true;
      console.log(this.loggedIn);
    })

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("https://localhost:5001/api/feed/rss", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
  }

}
