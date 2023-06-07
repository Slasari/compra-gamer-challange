import { Component } from '@angular/core';
import { Product, SubCategory } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  public productList: Product[] = []
  public subCategoryList: SubCategory[] = []

  public popularProducts: Product[] = []
  
  
  public images : string[] = [
    "https://www.teahub.io/photos/full/102-1029001_hd-game-wallpapers-archives-de-portada-para-youtube.jpg",
  ]

  constructor(private product: ProductService){}


  ngOnInit(){
    this.getProducts();
  }

  getProducts() {
    this.product.getProducts().subscribe((products) => {
      if (products) {
        this.productList = products;
      }
      this.product.getCategories().subscribe((categories) => {
        if(categories){
          this.subCategoryList = categories
        }
        if(this.productList && this.subCategoryList){
          this.productList = this.product.getProductsWithCategory(this.productList, this.subCategoryList)
          for(let i = 0; i < 4; i++){

            let random = Math.floor(Math.random() * this.productList.length)
            this.popularProducts.push(this.productList[random])
          }
        }
        return "Success";
      })
    });
  }
}
