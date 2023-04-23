import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  account: string = ''

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null)
  })

  submitForm(data: FormGroup) {
   
    this._AuthService.login(data.value).subscribe({
      next: (res) => {
        this.account = ''
        if (res.token) {
          localStorage.setItem('storeToken', res.token);
          this._AuthService.currentUser();
          this._Router.navigate(['/home'])
        }
      },
      error: (err) => {console.log(err)
        if (err.status == 401){ 
          this.account = 'invalid account'
        }else{
          this.account = ''
        } }
    })
  }

}
