import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseList: Course[] = [];
  constructor() {
    this.courseList = [
      { id: 1, name: 'Angular' },
      { id: 2, name: 'HTML' },
      { id: 3, name: 'CSS' },
      { id: 4, name: 'JavaScript' },
      { id: 5, name: 'Python' },
      { id: 6, name: 'Node.js' },
      { id: 7, name: 'PHP' }
    ];
  }
  getCourseList() {
    return this.courseList;
  }

  get coursesList() {
    return this.courseList;
  }
  // set courses(obj: Course) {
  //   this.courseList.push(obj);
  // }
  add(obj: Course) {
    this.courseList.push(obj);
  }

  delete(obj: Course) {
    const indexVal = this.courseList.indexOf(obj);
    this.courseList.splice(indexVal, 1);
  }

}


export class Course {
  id: number;
  name: string;
}

