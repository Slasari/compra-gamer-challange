import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login, User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user/user.service';


@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {


  showLogin: boolean = false;

  refresh: number = 0;

  registerError : string = '';
  loginError : string = '';

  constructor(private user: UserService, private route: Router){}

  ngOnInit(){

  }

  signUp(user: User){
    if(user){
      if(user.admin !== true){
        user.admin = false;
      }
      if(localStorage.getItem('user')){
          let userStorage = (localStorage.getItem("user"))
          let userData = userStorage && JSON.parse(userStorage)
          if(user.mail === userData.mail){
            this.registerError = "emailError";
            }
            setTimeout(() => {
              this.registerError = ''
            }, 3000)
            if (user.dni === userData.dni){
              this.registerError = "dniError"
            }
            setTimeout(() => {
              this.registerError = ''
            }, 3000)
            if(user.mail !== userData.mail && user.dni !== userData.dni){
              localStorage.removeItem('user')
              user.state = 'connected'
              localStorage.setItem('user', JSON.stringify(user))
              this.route.navigate(['/home'])
              this.user.refresh.emit(1)
            }
      } else{
          user.state = "connected"
          localStorage.setItem('user', JSON.stringify(user))
          this.route.navigate(['/home'])
          this.user.refresh.emit(1)
        }
    }
  }

  login(user: Login){
    if(localStorage.getItem('user')){
      let userStorage = (localStorage.getItem("user"))
      let userData = userStorage && JSON.parse(userStorage)
      if(user.name !== userData.name){
        this.loginError = 'nameError'
      }
      setTimeout(() => {
        this.loginError = ''
      }, 3000)
      if(user.mail !== userData.mail){
        this.loginError = 'mailError'
      }
      setTimeout(() => {
        this.loginError = ''
      }, 3000)
      if(user.name === userData.name && user.mail === userData.mail && userData.admin){
        userData.state = "connected"
        localStorage.setItem('user', JSON.stringify(userData))
        this.route.navigate(['/home'])
        this.user.refresh.emit(2)
        this.user.isAdminLogged.next(true)
      }
      if(user.name === userData.name && user.mail === userData.mail){
        userData.state = "connected"
        localStorage.setItem('user', JSON.stringify(userData))
        this.route.navigate(['/home'])
        this.user.refresh.emit(2)
      }
    }
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
