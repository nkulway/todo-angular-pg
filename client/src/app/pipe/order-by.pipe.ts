import { Pipe, PipeTransform } from "@angular/core";
import { orderBy } from 'lodash'

interface Case {
  [key: string]: any;
  title: string;
}

@Pipe({
 name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
 transform(array: any, sortBy: string, order?: any): any[] {

 const array2 = array.map((todo: Case) => {
   const updatedTodo = {
     ...todo,
     title: todo.title.toLowerCase()
   }
   return updatedTodo
 })

 const sortOrder = order ? order : 'asc'; // setting default ascending order

  return orderBy(array2, [sortBy], [sortOrder]);
  }
}
