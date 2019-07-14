import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  inputChange(input: NgModel) {
    console.log(input.errors);
  }

  formSubmit(form: NgForm) {
    // console.log(form.controls);
    console.log(form.value);
    // console.log(form.control);
    form.control.setErrors({ formError: 'some problem!' });
  }
}
