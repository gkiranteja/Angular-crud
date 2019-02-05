import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _register = "http://localhost:3000/api/register";
  private _login = "http://localhost:3000/api/login";

  constructor( private http: HttpClient, private _router: Router ) { }

  registerUser(user){
     return this.http.post<any>(this._register, user)
  }
  
  loginUser(user){
     return this.http.post<any>(this._login, user)
  }

  loggedIn(){
     return !!localStorage.getItem('token')
  }

  logoutUser(){
     localStorage.removeItem('token')
     this._router.navigate(['/events'])
  }

  getToke(){
    return localStorage.getItem('token')
  }

}
