import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import {User} from '../User'
import { LoginResponse } from '../LoginResponse';

let token = localStorage.getItem('token')

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/v1/users/login'
  private apiUrlRegister = 'http://localhost:3000/api/v1/users/register'


  constructor(private http:HttpClient) { }



  login(user: User): Observable<LoginResponse> {
    console.log(user)
    return this.http.post<LoginResponse>(this.apiUrl, user, httpOptions)
  }

  register(user: User): Observable<LoginResponse> {
    console.log(user)
    return this.http.post<LoginResponse>(this.apiUrlRegister, user, httpOptions)
  }
}
