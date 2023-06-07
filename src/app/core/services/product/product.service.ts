import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLc, URLp } from '../../constans/constans';
import { Product, SubCategory } from '../../models/product.model';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  URLp = URLp

  URLc = URLc


  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.URLp)
  }

  getCategories(): Observable<SubCategory[]>{
    return this.http.get<SubCategory[]>(this.URLc)
  }

  getProductsWithCategory(p: Product[] , c: SubCategory[]){
    for(let i = 0; i < p.length ; i++){
      for(let j = 0; j < c.length; j++){
        if(p[i].id_subcategoria === c[j].id){
          p[i].subCategoria = c[j].nombre
        }
      }
    }
    return p
  }

}



