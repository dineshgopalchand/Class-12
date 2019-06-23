import { Component } from '@angular/core';

@Component({
    selector: 'app-course',
    template: `
    <!-- <h3 >{{courseTitle}}</h3> -->
    <!-- <h3 >{{getTitle()}}!!</h3> -->
    <h3 >{{title}}!!!!!</h3>
    <div>{{1+1}}</div>
    <div>{{currentTime}}</div>
    <app-courses></app-courses>
    <app-courses></app-courses>
    <app-courses>
    </app-courses>
    `
})
export class CourseComponent {
    courseTitle = 'This is course component';
    currentTime: Date = new Date();
    constructor() {
        this.currentTimeVal();
    }
    getTitle() {
        return this.courseTitle;
    }
    get title() {
        return this.courseTitle;
    }
    currentTimeVal() {
        setInterval(() => {
            this.currentTime = new Date();
        }, 1000);
    }

}
