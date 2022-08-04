import { Component } from '@angular/core';
import { Friend } from "./friend";

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
  submitForm(){
    console.log(this.friendModel);
  }
}

