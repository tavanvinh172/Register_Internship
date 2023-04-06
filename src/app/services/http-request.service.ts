import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
    constructor(private http: HttpClient){}

    public postRequest(url?: string, body?: any): Observable<any>{
        return this.http.post(environment.baseUrl + url, body);
    }

    public getRequest(url?: string, queryParameters?: any) : Observable<any>{
        return this.http.get(environment.baseUrl + url, queryParameters);
    }

}