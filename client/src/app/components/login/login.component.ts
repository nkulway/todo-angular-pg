import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onUserLogin: EventEmitter<User> = new EventEmitter()
  id: number
  username: string
  password: string

  constructor() { }

  ngOnInit(): void {
  }

  onLogin() {
    if(!this.username || !this.password) {
      alert('Please add a valid username and password')
      return
    }
    const userLogin = {
      id: this.id,
      username: this.username,
      password: this.password
    }


    this.onUserLogin.emit(userLogin)

    this.username = ''
    this.password = ''

  }


}
