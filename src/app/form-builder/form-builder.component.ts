import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.form = new FormGroup({
    //   name: new FormControl(),
    //   topics: new FormArray([]),
    //   contact: new FormGroup({
    //     email: new FormControl(),
    //     phone: new FormControl()
    //   })
    // });
    const fb = this.fb;
    this.form = fb.group({ // to create Instance of FormGroup
      // name: this.fb.control(''),
      name: [], // to create Instance of FormControl
      topics: fb.array([]), // to create Instance of FormArray
      contact: fb.group({ // to create Instance of FormGroup
        email: [], // to create Instance of FormControl
        phone: [] // to create Instance of FormControl
      })
    });


  }

}
