import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Just Todo It';


  constructor() { }

  // Lifecycle method --> http request
  ngOnInit(): void {}

  toggleAddTask() {

  }

}
