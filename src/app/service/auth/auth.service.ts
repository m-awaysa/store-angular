import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }
  loginUser = new BehaviorSubject(null);

  currentUser() {
    if (localStorage.getItem("storeToken")) {
      let token = JSON.stringify(localStorage.getItem("storeToken"))
      let decode: any = jwtDecode(token)
      this.loginUser.next(decode)
    }
  }
  login(user: any): Observable<any> {
    return this._HttpClient.post('https://fakestoreapi.com/auth/login', user)
  }
}
