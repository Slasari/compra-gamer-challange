import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Login, User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  showLogin: boolean = false;

  authError: boolean = false;

  constructor(private user: UserService){}

  ngOnInit(){

  }

  signUp(user: User){
    this.user.userSignUp(user).subscribe((result: User) => {
      if(result){
        localStorage.setItem('user', JSON.stringify(result))
      }
    })
  }

  login(data: Login){
    this.user.userLogin(data)
    this.user.loginError.subscribe((error) => {
      if(error){
        this.authError = true;
      }
    })
    setTimeout(() => {
      this.authError = false;
    }, 3000);
  }

  openLogin(id: number){
    if(id === 1){
      this.showLogin = true;
    }
    else {
      this.showLogin = false;
    }
  }
}
