import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../service/product/products.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../service/category/categories.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  name: string | null = '1'
  productArray:any[]=[]
  constructor(private _CategoriesService: CategoriesService, private _ActivatedRoute: ActivatedRoute) { }
  term:any = ''
  ngOnInit() {
    this.name = this._ActivatedRoute.snapshot.paramMap.get('category');

    this._CategoriesService.getCategoryProducts(this.name).subscribe({
      next:res=> this.productArray=res
    })
  }
}
