import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() onHandleUser: EventEmitter<User> = new EventEmitter()
  id: number
  username: string
  password: string

  constructor() { }

  ngOnInit(): void {
  }

  onRegister() {
    if(!this.username || !this.password) {
      alert('Please add a valid username and password')
      return
    }
    const userLogin = {
      id: this.id,
      username: this.username,
      password: this.password
    }


    this.onHandleUser.emit(userLogin)



    this.username = ''
    this.password = ''
  }

}
