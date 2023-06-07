import { Component, Input } from '@angular/core';
import { Product, SubCategory } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: Product = {
    nombre: '',
    precio: 0,
    id_subcategoria: 0,
    imagenes: [{
      nombre: ''
    }]
  }

  ngOnIni(){

  }

}
