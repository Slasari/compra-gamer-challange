import { Component } from '@angular/core';
import { Product, SubCategory } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  popularProducts: undefined | Product[];

  productList: Product[] = []
  subCategoryList: SubCategory[] = []

  constructor(private product: ProductService){}

  ngOnInit(){
    this.getProducts();
  }

  getProducts() {
    this.product.getProducts().subscribe((products) => {
      if (products) {
        for (let i = 0; i < products.length; i++) {
          products[i].precio = this.product.currencyFormatter(
            'ARS',
            products[i].precio
          );
        }
        this.productList = products;
      }
      this.product.getCategories().subscribe((categories) => {
        if(categories){
          this.subCategoryList = categories
        }
        if(this.productList && this.subCategoryList){
          this.productList = this.product.getProductsWithCategory(this.productList, this.subCategoryList)
        }
      })
    });
  }
}
