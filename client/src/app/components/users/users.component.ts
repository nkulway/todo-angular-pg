import { Component, OnInit } from '@angular/core';
import { LoginResponse } from 'src/app/LoginResponse';
import { UserService } from 'src/app/services/user-login.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User
  loginResponse: LoginResponse
  isLoggedOut: boolean = true

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token')
    token ? this.isLoggedOut = false : this.isLoggedOut = true
  }

  // a subscription to an observable will trigger the observable to execute
  loginUser(user: User) {
    this.userService.login(user).subscribe((loginResponse) => (localStorage.setItem('token', loginResponse.token), window.location.reload()))

  }

  registerUser(user: User) {
    this.userService.register(user).subscribe((loginResponse) => ((loginResponse.token), window.location.reload()))

  }

}
