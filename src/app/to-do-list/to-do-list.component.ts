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
    // this.toDoList.push(
    //   new FormControl(topic.value)
    // );
    this.toDoList.push(
      new FormGroup({
        topicname: new FormControl(topic.value),
        status: new FormControl(false)
      })
    );
    topic.value = '';
    console.log(this.toDoList);
  }
  get toDoList() {
    return this.toDoForm.get('toDoList') as FormArray;
  }
  removeTopic(item: any) {
    const indexVal = this.toDoList.controls.indexOf(item);
    console.log(indexVal);
    // this.toDoList.controls.splice(indexVal, 1);
    this.toDoList.removeAt(indexVal);
  }
  updateTopic(item: any, key: string) {
    const indexVal = this.toDoList.controls.indexOf(item);

    this.toDoList.controls[indexVal].value[key] = !this.toDoList.controls[indexVal].value[key];
    console.log(this.toDoList);
  }

}
