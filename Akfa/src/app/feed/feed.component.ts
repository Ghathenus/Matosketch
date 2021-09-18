import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as xml2js from "xml2js";
import { NewsRss } from './news-rss';
import { AuthenticationService } from "../shared/services/authentication.service";
import { interval } from "rxjs";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
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
