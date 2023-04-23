import { Component,OnInit } from '@angular/core';
import { CategoriesService } from '../service/category/categories.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {//oninit
  constructor(private _CategoriesService: CategoriesService) {
  }
  loading:boolean=false
  categoryImage: string[] = [
    "electronics.png",
    "jewelery.png",
    "men's-clothing.png",
    "women's-clothing.png"];
  categoriesArray: any[] = [];
  ngOnInit(): void {
    this.loading=true;
    this._CategoriesService.getAllCats().subscribe({
      next: (data) => {
        this.categoriesArray = data
        this.loading=false
      }
    })
    
  }

}
