import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private _UserService: UserService) { }
  users: any = []
  loading: boolean = false
  ngOnInit(): void {
    this.loading = true;
    this._UserService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false
      }
    })
  }
}
