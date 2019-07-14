import { Injectable, RootRenderer } from '@angular/core';

// @Injectable({
//     providedIn: 'root'
// })
@Injectable()
export class CourseService {

    getCourseList() {
        return [
            { id: 1, name: 'Angular' },
            { id: 2, name: 'HTML' },
            { id: 3, name: 'CSS' },
            { id: 4, name: 'JavaScript' },
            { id: 5, name: 'Python' },
            { id: 6, name: 'Node.js' },
            { id: 7, name: 'PHP' }
          ];
    }
}
