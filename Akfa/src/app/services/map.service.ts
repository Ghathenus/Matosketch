import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getJSON(): Observable<any> {
    return this.http.get("./assets/locations.json");
  }

}

export interface marker {
	lat: number;
  lng: number;
  name: string;
}