import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-event2',
  templateUrl: './data-event2.component.html',
  styleUrls: ['./data-event2.component.css']
})
export class DataEvent2Component implements OnInit {

  title = 'Add Bootstrap';
  buttonText = 'Save';
  isActive = false;
  titleValue = 'some title';
  constructor() { }

  ngOnInit() {
  }
  changeStatus(event: Event) {
    event.stopPropagation();
    console.log('change status get called');
    this.isActive = !this.isActive;
    console.log(event);
  }
  parentElementClicked() {
    console.log('parentElementClicked');
  }
  // userInput(e: KeyboardEvent) {
  //   console.log(e);
  //   if (e.keyCode === 13) {
  //     console.log((e.target as HTMLInputElement).value);
  //   }
  // }
  userInput(input: HTMLInputElement) {
    console.log(input.value);
    // console.log((e.target as HTMLInputElement).value);
  }
  updateValue(titleIput: HTMLInputElement) {
    this.titleValue = titleIput.value;
  }
}
