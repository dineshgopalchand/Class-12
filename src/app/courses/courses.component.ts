import { Component, OnInit } from '@angular/core';
// import { CourseService } from '../common/services/course.service';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Course List';
  coursesList = [];
  constructor(
    private courseService: CoursesService
  ) { }

  ngOnInit() {
    this.coursesList = this.courseService.getCourseList();
  }

}
