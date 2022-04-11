import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
    private showAddTodo: boolean = false
    private subject = new Subject<any>()

  constructor() { }

  toggleAddTodo(): void {
    // set showAddTask to the opposite of itself
    this.showAddTodo = !this.showAddTodo
    // pass to header component
    this.subject.next(this.showAddTodo)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
