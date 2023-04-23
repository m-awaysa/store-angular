import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../service/product/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  id: string | null = '1'
  product:Product={
    title:'',
    image:'',
    price:0,
    description:''
  }
  constructor(private _ProductsService: ProductsService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this._ActivatedRoute.snapshot.paramMap.get('productId');

    this._ProductsService.getProductDetails(this.id).subscribe({
      next:res=> this.product=res
    })
  }
}
