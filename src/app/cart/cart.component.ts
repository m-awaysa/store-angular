import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private _UserService: UserService) { }
  cart: any[] = []
  error: boolean = false
  loading: boolean = false
  ngOnInit() {
    this.loading = true
    this._UserService.getCart().subscribe({
      next: (data) => {

          this.cart = data[0].products
          this.loading = true
        
      },
      error: (err) => {
        this.error = true
        this.loading = false
      }
    })
  }
}
