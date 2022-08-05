import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Friend } from "./friend";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  _http : HttpClient
  _url : string = 'http://localhost:9009/'
  constructor(http : HttpClient) {
    this._http = http;
  }
  addFriend(data : Friend){
    return this._http.post(this._url, data)
  }
}
