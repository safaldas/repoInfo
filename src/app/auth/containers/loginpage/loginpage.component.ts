import { Component, OnInit } from '@angular/core';
import { Authenticate } from '../../../models/user';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  pending$ = false;
  error$ = false;
  constructor() {}

  ngOnInit() {}

  onSubmit($event: Authenticate) {
    console.log("event recieved in parent $event :",$event)
  }
}
