import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit, OnDestroy {
  // OnInit is for the interface

  todos: Todo[];
  inputToDoTask: string = "";

  constructor() { }

  ngOnInit(): void {

    // the 'this' object is an emtpy Todo array and the inputToDotask as an empty string
    // console.log(this);
    this.todos = [];
  }

  ngOnDestroy(): void {
    
  }

  // Methods below ~ need to add the corresponding implements on line 10 for it to work
    // ngAfterViewInit - after the component HTML is all ready, where the HTML is prepared to be drawn
    // ngOnChanges - doesn't have input, but whenever the value of inp  ut gets changed
    // ngOnDestroy - when component is destroyed/removed



  // on click, this function gets called 
  toggleDone(task: number) {

    this.todos[task].completed = !this.todos[task].completed;

    // // for this, a forEach loop would suffice
    // this.todos = this.todos.map((todo, i) => {
    //   // if statement to check which task the user wants to cross off the list, if the task item matches the index number, then we will change the boolean of that specific task's completed status
    //   if(i === task) {
    //     todo.completed = !todo.completed;
    //   }
    //   return todo;
    // })
  }
  
  
  deleteRemove(task: number){

    // can use .splice() to get a new array
    this.todos.splice(task, 1);

    // // using the filter method to return only the items in the array that have indexes that DO NOT match the index that the user has selected
    // this.todos = this.todos.filter((todo, i) => {
    //   // if the task's index DO NOT match the index in the array, then return it, else remove/withold it
    //   i !== task
    // })
  }

  // on the form submit, this function will be called
    // this function will push the 
  addTodo() {
    // console.log(this);
    // console.log(this.todos);

    // targetting the empty array and pushing an object with the keys of content and completed into it, and ensuring that the keys are matched with the appropriate properties
    this.todos.push({
      content: this.inputToDoTask, 
      completed: false
    })
    
    // resetting the inputToDoTask to an empty string so that it does not stay in the input text section
    this.inputToDoTask = "";
  }

}
