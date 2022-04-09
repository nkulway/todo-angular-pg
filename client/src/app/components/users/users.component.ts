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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  loginUser(user: User) {
    console.log(this.userService.login(user).subscribe((loginResponse) => (localStorage.setItem('token', loginResponse.token))))
  }

}
