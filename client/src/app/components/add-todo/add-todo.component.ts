import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();

  title: string;
  description: string;
  dueDate: string;
  tag: string;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    // show and hide todo form
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.title || !this.description || !this.dueDate || !this.tag) {
      alert('Please include all required fields');
      return;
    }
    const newTodo = {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      tag: this.tag,
    };

    // emitting new todo to event in todos
    this.onAddTodo.emit(newTodo);

    this.title = '';
    this.description = '';
    this.dueDate = '';
    this.tag = '';

    window.location.reload()
  }
}
