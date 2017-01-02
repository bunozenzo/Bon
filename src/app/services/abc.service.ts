import {Injectable} from '@angular/core';
import { Http,Response} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AbcService {

  private apUrl="http://5868ca90657edf1200b9a60b.mockapi.io/api/employees/";

  constructor(private _http:Http){

  }
  Getlist(): Observable<any[]>{
    return this._http.get(this.apUrl).map((response:Response)=> response.json());
  }
  Getlistid(id:number): Observable<any[]>{
    return this._http.get(this.apUrl+id).map((response:Response)=> response.json());
  }
}
