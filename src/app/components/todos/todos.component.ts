import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos: Todo[];
  inputToDoTask: string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [];
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if ( i == id) v.completed = !v.completed
      return v
    
    })
  }

  deleteRemove(id: number){
    this.todos = this.todos.filter((v, i) => {
      i !== id
    })
  }

  // on the form submit, this function will be called
    // this function will push the 
  addTodo() {
    this.todos.push({
      content: this.inputToDoTask, 
      completed: false
    })
    this.inputToDoTask = "";
  }

}
