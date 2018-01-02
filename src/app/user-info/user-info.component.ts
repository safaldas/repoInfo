import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit {
  user: any;
  errorMessage: string;

  url = 'https://api.github.com/repos/dtrupenn/Tetris';
  userData : any;

  constructor(private _userInfoService: UserInfoService) { }

  ngOnInit() {
    this._userInfoService.getUserDetails(this.url)
    .subscribe(datas =>  {this.userData = datas;
      console.log("USER:"+this.userData);},
    error => this.errorMessage = <any>error);;
  }

  // getUserInfo(name: string) {
  //   console.log('hello');
  //   this._searchService.getUserInfo(name).subscribe(
  //     user => {this.user = user; console.log('USER=' + this.user); },
  //     error => this.errorMessage = <any>error);
  // }


}
