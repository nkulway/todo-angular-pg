import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import {Todo} from '../../Todo'


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Output() onSortClick: EventEmitter<any> = new EventEmitter()
  todos: Todo[] = []
  sortCategory: string
  alpha = false
  date = false
  isLoggedIn: boolean = false


  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => this.todos = todos)
    let token = localStorage.getItem('token')
    token ? this.isLoggedIn = true : this.isLoggedIn = false
  }

  deleteTodo(todo: Todo) {
    // think of subscribe as .then() - it triggers an observable
    this.todoService.deleteTodo(todo).subscribe(() => (this.todos = this.todos.filter(t => t.id !== todo.id)))
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((todo) => (this.todos.push(todo)))
  }


  // when ran sets alpha to true and date to false
  onAlphaSortSubmit() {
    this.alpha = true
    this.date = false
  }

  // when rann sets date to true and alpha to false
  onDateSortSubmit() {
    this.date = true
    this.alpha = false
  }

  // checks local storage to see if there is a token - if so then the user is logged in
  checkUserLogin() {
    let token = localStorage.getItem('token')
    token ? this.isLoggedIn = true : this.isLoggedIn = false
  }


}
