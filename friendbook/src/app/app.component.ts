import { Component } from '@angular/core';
import { Friend } from "./friend";
import { AddFriendService } from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  language0: Array<string> = ['JavaScript', 'Ruby']
  language1: Array<string> = ['html', 'css']
  language2: Array<string> = ['PHP', 'Java']
  language3: Array<string> = ['C/C++', 'ARM', 'Rust']
  friendModel = new Friend(null, null, null, null, null);
  constructor(private addFriendService : AddFriendService) {
  }
  submitForm(){
    let observable = this.addFriendService.addFriend(this.friendModel)
    // console.log(this.friendModel);
    observable.subscribe(data => console.log('good'), error => console.error('bad'))
  }
}

