import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'
import {Todo} from '../Todo'

const token = localStorage.getItem('token')


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/api/v1/todos'

  constructor(private http:HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl)
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.apiUrl}/${todo.id}`
    return this.http.delete<Todo>(url)
  }

  addTodo(todo: Todo): Observable<Todo> {
    console.log(todo)
    return this.http.post<Todo>(this.apiUrl, todo, httpOptions)
  }

}
