import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDoForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.toDoForm = new FormGroup({
      toDoList: new FormArray([])
    });
  }
  addTopic(topic: HTMLInputElement) {
    // console.log(topic.value);
    this.toDoList.push(
      new FormControl(topic.value)
    );
    topic.value = '';
    console.log(this.toDoList);
  }
  get toDoList() {
    return this.toDoForm.get('toDoList') as FormArray;
  }

}
