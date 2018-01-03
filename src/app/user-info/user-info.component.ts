import { Component, OnInit } from '@angular/core';
import { UserInfoService } from './user-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit {
  userRepo : string;
  errorMessage: string;
  url: string;
  userData : any;

  constructor(private _userInfoService: UserInfoService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.userRepo = this._route.snapshot.params['full_name'];
    this.url = `https://api.github.com/repos/${this.userRepo}`;
    console.log("URL"+this.url);
    console.log("userReppo"+this.userRepo);
    this._userInfoService.getUserDetails(this.url)
    .subscribe(datas =>  {this.userData = datas;
      console.log("USER:"+this.userData);},
    error => this.errorMessage = <any>error);

  }

  // getUserInfo(name: string) {
  //   console.log('hello');
  //   this._searchService.getUserInfo(name).subscribe(
  //     user => {this.user = user; console.log('USER=' + this.user); },
  //     error => this.errorMessage = <any>error);
  // }


}
