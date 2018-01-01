import { Component, OnInit } from '@angular/core';
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

  constructor(private _route: ActivatedRoute, private _searchService: SearchService, private _router: Router) { }

  ngOnInit(): void {
    const name = this._route.snapshot.params['full_name'];
    console.log(name);
    // this.pageTitle += `: ${id}`;
    // this.getUserInfo(name);
  }

  // getUserInfo(name: string) {
  //   console.log('hello');
  //   this._searchService.getUserInfo(name).subscribe(
  //     user => {this.user = user; console.log('USER=' + this.user); },
  //     error => this.errorMessage = <any>error);
  // }


}
