import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private _AuthService: AuthService,private _Router:Router) { }
  isLogin: boolean = false
   
  logout() {
    localStorage.removeItem('storeToken')
    this._AuthService.loginUser.next(null)
    this._Router.navigate(['/login'])
  }

  ngOnInit() {
    this._AuthService.currentUser()
    this._AuthService.loginUser.subscribe({
      next: () => {
    
        if (this._AuthService.loginUser.getValue() != null) {
          this.isLogin = true
        } else {
          this.isLogin = false
        }
      }
    })
  }
}
