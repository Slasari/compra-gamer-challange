import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user/user.service';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuType: number = 0;

  userName: string | undefined;

  refresh: number = 0;

  cartIcon = faCartShopping


  constructor(private route: Router, private user: UserService){}

  ngOnInit(){
    this.user.refresh.subscribe((result) => {
      if(result){
        this.authVerify();
        this.refresh = 0
      }
    })
    this.authVerify();
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
    this.user.userLogout();
    this.userName = undefined;
    this.authVerify();
  }
}
