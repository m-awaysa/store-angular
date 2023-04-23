import { Component,OnInit  } from '@angular/core';
import { ProductsService } from '../service/product/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  constructor(private _ProductsService: ProductsService) { }
  productArray:any[]=[];
  term:any = ''
  loading:boolean=false
  
  ngOnInit(){
    this.loading=true;
    this._ProductsService.getAllProducts().subscribe({
      next:(data)=>{
        this.productArray=data
        this.loading=false
      }
    })
  }
}
