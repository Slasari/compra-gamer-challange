import { Component } from '@angular/core';
import { Product, SubCategory } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {

  public productList: Product[] = [];
  public subCategoryList: SubCategory[] = [];


  public page!: number;

  parameter = 'default';

  parameter2 = 'default';

  
  constructor(private product: ProductService) {}
  
  ngOnInit(): void {
    this.getProducts();
  }
  public reset(){window.scroll({top:65, behavior:'smooth'})}
  
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
        }
        if(this.productList && localStorage.getItem('localCart')){
          let cartStore = (localStorage.getItem('localCart'))
          let cartData = cartStore && JSON.parse(cartStore)
          this.productList = this.product.getLocalCartData(this.productList, cartData)
        }
      })
    });
  }
  setProducts(){
    this.getProducts();
  }
}
