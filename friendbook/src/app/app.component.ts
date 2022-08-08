import {Component, OnInit} from '@angular/core';
import {Friend} from "./friend";
import {AddFriendService} from "./add-friend.service";

// import * as url from "url";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  language0: Array<string> = ['JavaScript', 'Ruby']
  language1: Array<string> = ['html', 'css']
  language2: Array<string> = ['PHP', 'Java']
  language3: Array<string> = ['C/C++', 'ARM', 'Rust']
  friendModel = new Friend(null, null, null, null, null);
  allFriends: any | string = '';

  constructor(private addFriendService: AddFriendService) {
  }

  ngOnInit(): any {
    this.getAllFriends('http://localhost:9009/allFriends')
  }

  submitForm() {
    let observable = this.addFriendService.addFriend(this.friendModel)
    // console.log(this.friendModel);
    observable.subscribe(data =>
        this.getAllFriends('http://localhost:9009/allFriends'),
      error => console.error('you did an oopsie'));
  }

  public async getAllFriends(_url: string): Promise<any> {
    await fetch(_url, {headers: {'Content-Type': 'application/json'}})
      .then(response => response.json())
      .then(data => {
        this.allFriends = data;
        console.log(this.allFriends);
      })
  }
}
