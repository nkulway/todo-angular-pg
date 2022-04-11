import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
    private showAddTask: boolean = false
    private subject = new Subject<any>()

  constructor() { }

  toggleAddTask(): void {
    // set showAddTask to the opposite of itself
    this.showAddTask = !this.showAddTask
    // pass to header component
    this.subject.next(this.showAddTask)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }
}
