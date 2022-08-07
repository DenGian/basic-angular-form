import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Friend } from "./friend";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private _http : HttpClient;
  private _url : string = 'http://localhost:9009/';

  constructor(httpClient : HttpClient) {
    this._http = httpClient;
  }
  addFriend(friend : Friend){
    console.log(friend);
    return this._http.post(this._url + 'addFriend', friend)
  }
}
