import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import {User} from '../User'
import { LoginResponse } from '../LoginResponse';

let token = localStorage.getItem('token')

// construct new http header values
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

  // HttpClient is an injectible class w/ methods to perform http requests
  constructor(private http:HttpClient) { }


  // Constructs a POST request that interprets the body as a JSON object and returns an observable of the response
  // LoginResonse is an iterface - a specification that identifies a related set of properties and methods to be implemented by a class
  login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, user, httpOptions)
  }

  // inject header into http request
  // Observables allow you to publish events - model a stream of events
  register(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrlRegister, user, httpOptions)
  }
}
