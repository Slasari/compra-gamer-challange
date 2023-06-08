import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuType: number = 0;

  userName: string | undefined;

  refresh: number = 0;

  cartItems: number = 0;


  constructor(private route: Router, private user: UserService, private productService: ProductService){}

  ngOnInit(){
    this.user.refresh.subscribe((result) => {
      if(result){
        this.authVerify();
        this.refresh = 0
      }
    })
    this.authVerify();

    let cartData = localStorage.getItem('localCart');
    if(cartData){
      this.cartItems= JSON.parse(cartData).length
      console.log(cartData)
    }
    this.productService.cartData.subscribe((items) => {
      this.cartItems = items.length
    })
  }

  authVerify(){
    if(localStorage.getItem('user')){
    let userStorage = localStorage.getItem('user');
    let userData = userStorage && JSON.parse(userStorage)
    if(userData.state === "connected"){
      this.userName = userData.name
      this.menuType = 1
     }
     else{
      this.menuType = 0
     }
   }
   else{
    this.menuType = 0
   }
  }

  

  registerPage(){
    this.route.navigate(['/user/auth'])
  }

  logout(){
    let userStorage = localStorage.getItem('user');
    let userData = userStorage && JSON.parse(userStorage)
    userData.admin = false
    localStorage.setItem('user', JSON.stringify(userData))
    this.userName = undefined;
    this.user.userLogout();
    this.authVerify();
    this.route.navigate(['/home'])
  }
}
