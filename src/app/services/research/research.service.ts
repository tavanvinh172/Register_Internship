import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestService } from '../http-request.service';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  constructor(private httpRequest: HttpRequestService) { }

  getAllStudentsResearch(): Observable<any>{
    return this.httpRequest.postRequest('/api/student/get-st-da-by-search', {});
  }

  filterResearch(type: number):Observable<any>{
    return this.httpRequest.getRequest(`/api/student/get-st-by-filter?type=${type}`);
  }
}
