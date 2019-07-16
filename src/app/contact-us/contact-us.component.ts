import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  selectedValue = 3;
  selectedOptObj: any;
  mailingOption: { id: number, value: string }[] = [
    {
      id: 1,
      value: 'Email'
    },
    {
      id: 2,
      value: 'SMS'
    },
    {
      id: 3,
      value: 'Post'
    },
    {
      id: 4,
      value: 'Call'
    },
    {
      id: 5,
      value: 'Whatsapp'
    },
  ];
  constructor() { }

  ngOnInit() {
    this.selectedOptObj = this.mailingOption.filter(data => {
      return data.id === this.selectedValue;
    });
    // console.log( this.selectedOptObj);
    this.selectedOptObj = this.selectedOptObj[0];
    // console.log( this.selectedOptObj);
  }
  inputChange(input: NgModel) {
    console.log(input.errors);
  }

  formSubmit(form: NgForm) {
    // console.log(form.controls);
    console.log(form.value);
    // console.log(form.control);
    // form.control.setErrors({ formError: 'some problem!' });
  }
}
