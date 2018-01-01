import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { DataSource } from '@angular/cdk/collections';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  str: string;
  user: any;
  errorMessage: string;
  repo: string ;
  private _searchUrl: string;
  flag = false;
  constructor(private _searchservice: SearchService) { }

  ngOnInit() {
  }

sendValue(): void {
  this._searchUrl = `https://api.github.com/search/repositories?q=${this.str}`;
  this._searchservice.getUser(this._searchUrl)
  .subscribe(data => { this.user = data; console.log(data); } , error => this.errorMessage = <any>error);
  this.flag = true;




}

  }


