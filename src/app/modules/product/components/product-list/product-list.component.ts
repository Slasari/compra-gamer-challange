import { Component } from '@angular/core';
import { Product, SubCategory } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {

  a: boolean = false;

  productList: Product[] = [];
  subCategoryList: SubCategory[] = [];

  constructor(private product: ProductService) {}

  ngOnInit(): void {
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
          console.log(this.productList)
        }
      })
    });
  }

}
