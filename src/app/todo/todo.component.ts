import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
public name = "Uche";
public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Welcome " + this.name;
  }

}
