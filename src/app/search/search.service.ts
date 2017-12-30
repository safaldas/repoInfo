import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';

@Injectable()

export class SearchService {
constructor(private _http: Http) {
}

getUser(_searchUrl): Observable<Response> {
    return this._http.get(_searchUrl).map((response: Response) => <Response> response.json());
 }

}

