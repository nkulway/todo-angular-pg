import { Component, OnInit, Input, Output } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Just Todo It';
  showAddTask: boolean;
  subscription: Subscription;
  isLoggedIn: boolean = false

  // In order to use a service you have to add it to your constructor
  constructor(private uiService: UiService, private router: Router) {
    // watch toggleAddTask if fired off in the service
    // 'value' will be a boolean and will be set to showAddTask
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  // Lifecycle method
  ngOnInit(): void {
    let token = localStorage.getItem('token')
    token ? this.isLoggedIn = true : this.isLoggedIn = false
  }

  // When we click this we are calling toggleAddTask from the UiService
  toggleAddTodo() {
    this.uiService.toggleAddTodo();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }

  logUserOut() {
    localStorage.removeItem('token')
    return window.location.reload()
  }
}
