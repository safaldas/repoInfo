import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserInfoService {

  constructor(private _http: Http) { }

  getUserDetails(gitUrl): Observable<Response>{
      return this._http.get(gitUrl)
      .map((response: Response) => response.json())
      .do(data => console.log('All:'+ JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
