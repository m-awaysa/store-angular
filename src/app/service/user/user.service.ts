import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private _HttpClient: HttpClient) { }


  getUsers(): Observable<any> {
    return this._HttpClient.get('https://fakestoreapi.com/users')
  }
  getCart(): Observable<any> {
    let token = JSON.stringify(localStorage.getItem("storeToken"))
    let decode: any = jwtDecode(token)
    return this._HttpClient.get(`https://fakestoreapi.com/carts/user/${decode.sub}`)
  }
}

