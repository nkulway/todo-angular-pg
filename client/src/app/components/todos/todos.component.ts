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
    console.log(todo)
    // think of subscribe as .then()
    this.todoService.deleteTodo(todo).subscribe(() => (this.todos = this.todos.filter(t => t.id !== todo.id)))
  }

  addTodo(todo: Todo) {
    console.log(todo)
    this.todoService.addTodo(todo).subscribe((todo) => (this.todos.push(todo)))
  }

  onAlphaSortSubmit() {
    console.log('world')
    this.alpha = true
    this.date = false
  }

  onDateSortSubmit() {
    console.log('world')
    this.date = true
    this.alpha = false
  }

  checkUserLogin() {
    let token = localStorage.getItem('token')
    token ? this.isLoggedIn = true : this.isLoggedIn = false
  }

  toggleComplete(todo: Todo) {
    console.log('works')
  }

}
