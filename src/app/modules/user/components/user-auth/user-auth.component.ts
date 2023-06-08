import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login, User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user/user.service';
import {FormGroup, FormControl} from '@angular/forms'


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

  form = new FormGroup({
    name: new FormControl(),
    lastname: new FormControl(),
    mail: new FormControl(),
    dni: new FormControl(),
    phone: new FormControl(),
    admin: new FormControl()
  })

  constructor(private user: UserService, private route: Router){}

  ngOnInit(){

  }

  onSubmit(data: any){
    console.log(data)
  }

  signUp(user: User){
    if(user){
      if(user.admin === ""){
        user.admin = 0;
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
      if(user.name === userData.name && user.mail === userData.mail && userData.admin === 0){
        userData.state = "connected"
        localStorage.setItem('user', JSON.stringify(userData))
        this.route.navigate(['/home'])
        this.user.refresh.emit(2)
        this.user.isAdminLogged.next(true)
      }
      if(user.name === userData.name && user.mail === userData.mail && userData.admin === false){
        userData.admin = true;
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
