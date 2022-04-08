import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import {Todo} from '../../Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => this.todos = todos)
  }

  deleteTodo(todo: Todo) {
    console.log(todo)
    // think of subscribe of .then()
    this.todoService.deleteTodo(todo).subscribe(() => (this.todos = this.todos = this.todos.filter(t => t.id !== todo.id)))
  }


}
