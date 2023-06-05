import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private route: Router){}

  ngOnInit(){

  }

  authVerify(){
    if(localStorage.getItem('user')){
      this.route.navigate(['/home'])
    }
    else {
      this.route.navigate(['/user/auth'])
    }
  }
}
