import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AbcService {

    private apUrl = "http://5868ca90657edf1200b9a60b.mockapi.io/api/employees/";

    constructor(private _http: Http) {

    }

    Getlist(): Observable<any[]> {
        return this._http.get(this.apUrl).map((response: Response) => response.json());
    }
    Search(keyword:string): Observable<any[]> {
        return this._http.get(this.apUrl+"?search="+keyword).map((response: Response) => response.json());
    }

    Getlistid(id: number): Observable<any[]> {
        return this._http.get(this.apUrl + id).map((response: Response) => response.json());
    }

    Update(id:number,data: any): Observable<any[]> {
        return this._http.put(this.apUrl+id, data).map((response: Response) => response.json());
    }

    Add(data: any): Observable<any[]> {
        return this._http.post(this.apUrl, data).map((response: Response) => response.json());
    }
    Delete(id: number): Observable<any[]> {
        return this._http.delete(this.apUrl+id).map((response: Response) => response.json());
    }
}
