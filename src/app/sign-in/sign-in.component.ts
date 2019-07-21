import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Username } from '../common/validators/username';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signIn: FormGroup;
  constructor() { }

  ngOnInit() {
    this.signIn = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        // Validators.pattern(/^[a-zA-Z]+$/),
        Username.cannotContainsSpace
      ], [
          Username.shouldBeUnique
        ]),
      password: new FormControl('',
        [Validators.required]),
      nameField: new FormGroup({
        firstname: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[a-zA-Z ]+$/),
        ]),
        lastname: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[a-zA-Z ]+$/),
        ])
      }),
    });
    // console.log(this.signIn);
  }
  inputFieldChange() {
    // console.log(this.signIn.get('username'));
    console.log(this.username);
  }
  get username() {
    return this.signIn.get('username');
  }
  get nameField() {
    return this.signIn.get('nameField');
  }
  get firstname() {
    return this.signIn.get('nameField.firstname');
  }
  get lastname() {
    return this.signIn.get('nameField.lastname');
  }

  signinSubmit() {
    const val = this.signIn.value;
    console.log(val);
    // http operation(API call)

    // setting custom error to the form
    // this.signIn.setErrors({
    //   networkError: true
    // });
    // setting custom error to particular field of the form
    // this.username.setErrors({
    //   isExist: true
    // });
  }

}
