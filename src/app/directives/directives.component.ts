import { Component, OnInit, DoCheck } from '@angular/core';
import { CoursesService, Course } from '../courses.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit, DoCheck {

  studentDetails = [{
    city: 'BLR',
    ist: [
      {
        istname: 'CMRIT',
        branch: [
          {
            branchname: 'IT',
            students: [
              {
                name: 'd',
                address: {
                  add1: {
                    street: '1st cross',
                    area: 'Marathahalli',
                  },
                  add2: {
                    street: '2st cross',
                    area: 'Marathahalli',
                  }
                }
              },
              {
                name: 'd',
                address: {
                  add1: {
                    street: '1st cross',
                    area: 'Marathahalli',
                  },
                  add2: {
                    street: '1st cross',
                    area: 'Marathahalli',
                  }
                }
              }
            ]
          }
        ]
      }]
  }, {
    city: 'BLR',
    ist: [
      {
        istname: 'CMRIT',
        branch: [
          {
            branchname: 'IT',
            students: [
            ]
          }
        ]
      }]
  }];

  activeTab = 'custom';
  courseList: Course[] = [];
  constructor(private courses: CoursesService) { }

  ngOnInit() {
    this.courseList = this.courses.getCourseList();
    console.log(this.courses.getCourseList());

  }
  ngDoCheck() {
    if (this.courseList !== this.courses.getCourseList()) {
      this.courseList = this.courses.getCourseList();
    }
  }

  addNewCourse(newCourse: HTMLInputElement) {
    this.courses.add({ id: 7, name: newCourse.value });
    newCourse.value = '';
  }

  deleteCourse(course: Course) {
    this.courses.delete(course);
  }

}
