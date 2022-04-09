import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { AuthInterceptor } from './services/auth-interceptor.service';


export function tokenGetter() {
  return localStorage.removeItem('token');
}
// tokenGetter()
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    LoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter
    //   }
    // })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
