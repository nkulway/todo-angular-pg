import { Pipe, PipeTransform } from "@angular/core";
import { orderBy } from 'lodash'

// interface to interact with
interface Case {
  [key: string]: any;
  title: string;
}

@Pipe({
 name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
 transform(array: any, sortBy: string, order?: any): any[] {

  // return new array with all lowercase
 const array2 = array.map((todo: Case) => {
   const updatedTodo = {
     ...todo,
     title: todo.title.toLowerCase()
   }
   return updatedTodo
 })

 const sortOrder = order ? order : 'asc'; // setting default ascending order

  // orderBy(collection, iteratees, order)
  return orderBy(array2, [sortBy], [sortOrder]);
  }
}
