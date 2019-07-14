import { Component, OnInit } from '@angular/core';
import { CourseService } from '../common/services/course.service';

@Component({
  selector: 'app-data-and-event',
  templateUrl: './data-and-event.component.html',
  styleUrls: ['./data-and-event.component.css']
})
export class DataAndEventComponent implements OnInit {

  title = 'Course List';
  title1 = '<i>Course List</i>';
  colSpan = 2;
  rowSpan = 2;
  imgSrc = 'https://dummyimage.com/600x400/1b1ba8/ffffff.png';
  courseList = [];
  constructor(private courseService: CourseService) {
    this.courseList = this.courseService.getCourseList();
  }

  ngOnInit() {
  }

}
