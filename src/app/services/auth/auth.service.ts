import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { AuthModel } from 'src/app/models/AuthModel';
import { TOKEN_NAME } from 'src/utils/constants';
import { HttpRequestService } from '../http-request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpRequest: HttpRequestService) { }

  tokenResp: any;

  private _updateMenu = new Subject<void>();

  get updateMenu(){
    return this._updateMenu;
  }

  loginUser(userModel?: AuthModel) : Observable<any>{
    const body = {
      'username': userModel?.username,
      'password': userModel?.password
    };
    return this.httpRequest.postRequest('/login-da', body)
  }

  isLoggin() : boolean{
    return localStorage.getItem(TOKEN_NAME) !== null;
  }

  getCurrentUser() : Observable<any>{
    return this.httpRequest.getRequest('/api/user/get-current-user');
  }

  logOut(): Observable<any>{
    return this.httpRequest.getRequest('/logout');
  }

  getCurrentToken() : any{
    return localStorage.getItem(TOKEN_NAME);
  }
}
