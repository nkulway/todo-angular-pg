import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter()
  title: string
  description: string
  dueDate: any
  tag: string

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.title) {
      alert('Please add a todo')
      return
    }
    const newTodo = {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      tag: this.tag
    }

    this.onAddTodo.emit(newTodo)

    this.title = ''
    this.description = ''
    this.dueDate = ''
    this.tag = ''
  }

}
