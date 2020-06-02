import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
public name = "";
public siteUrl = window.location.href;
public myId = "todoId";
public isDisabled = true;
public successClass = "text-success";
public hasError = true;
public isSpecial = true;
public msgClasses = {
  "text-success": !this.hasError,
  "text-danger": this.hasError,
  "text-special": this.isSpecial

}
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Welcome " + this.name;
  }

}
