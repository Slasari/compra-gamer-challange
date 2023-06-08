import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Login, User } from '../../models/user.model';
import { URLu } from '../../constans/constans';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL: string = URLu

  refresh: EventEmitter<number> = new EventEmitter<number>();

  isAdminLogged = new BehaviorSubject<boolean>(false)


  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(){

  }

  userLogout(){
    let userStorage = localStorage.getItem('user');
    let userData = userStorage && JSON.parse(userStorage)
    userData.state = "disconnected"
    localStorage.setItem("user", JSON.stringify(userData))
  }

  authRefresh(){
    this.refresh.emit(1)
  }


}
