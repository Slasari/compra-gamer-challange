import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Login, User } from '../../models/user.model';
import { URLu } from '../../constans/constans';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL: string = URLu

  loginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(){

  }

  userSignUp(user: User){
    return this.http.post<User>(this.URL, user)
  }

  userLogin(data: Login){
    return this.http.get<Login>(`${this.URL}?mail=${data.mail}&password=${data.password}`,{observe: 'response'}).subscribe((result: any) => {
      if(result && result.body && result.body.length === 1){
        this.loginError.emit(false);
        localStorage.setItem('user', JSON.stringify(result.body))
        this.route.navigate([''])
      }
      else{
        this.loginError.emit(true);
      }
    })
  }
}
