import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

@Injectable()

export class SearchService {
    user_url: string;
constructor(private _http: Http) {
}

getUser(_searchUrl): Observable<Response> {
    return this._http.get(_searchUrl).map((response: Response) => <Response> response.json());
 }
//  getUserInfo(name): Observable<Response> {
//     this. user_url = `https://api.github.com/search/repositories?q=${name}`;
//     return this._http.get(this.user_url).map((response: Response) => <Response> response.json().filter(p => p.name === name));
// // return this.getUser(_searchUrl)
// //     .map((response: Response) => response.find(p => p.id === id));

//  }

}

