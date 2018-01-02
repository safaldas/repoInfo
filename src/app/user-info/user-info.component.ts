import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit {

  url = 'https://api.github.com/repos/dtrupenn/Tetris';
  errorMessage : string;
  userData : any;

  constructor(private _userInfoService: UserInfoService) { }

  ngOnInit() {
    this._userInfoService.getUserDetails(this.url)
    .subscribe(datas =>  {this.userData = datas;
      console.log("USER:"+this.userData);},
    error => this.errorMessage = <any>error);;
  }

}
