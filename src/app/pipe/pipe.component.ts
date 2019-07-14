import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  course = {
    title: 'angular Course',
    rating: 4.75232,
    rating1: 4.75282,
    rating2: 4,
    students: 2000,
    price: 10000,
    discountedPrice: 9800,
    releaseDate: new Date(2019, 30, 6),
    // tslint:disable-next-line:max-line-length
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ex quis, ipsa delectus atque libero minima quaerat labore aspernatur provident debitis nihil laborum. Veritatis maiores doloremque, alias illo porro eius ipsam sint iusto modi aliquam iure blanditiis qui eos magni aut, sapiente laudantium obcaecati fuga eveniet temporibus neque! Recusandae labore error earum in ipsa fugit, voluptatem quos aspernatur qui velit eius ipsum molestiae dolores sequi provident nobis. Assumenda error libero repellat sapiente laborum, officia fugiat quas repellendus quos nisi impedit atque, vero aperiam, placeat sit! Quisquam placeat molestias fuga ipsum. Minus accusantium beatae eum, expedita labore ex in odit possimus obcaecati illo maxime iure sequi dolore quibusdam hic minima veniam atque ratione totam exercitationem perspiciatis. Suscipit eveniet repudiandae temporibus dicta animi corporis excepturi dolore, totam necessitatibus, esse et dolorem modi, aliquid quaerat dolores eligendi laboriosam non magnam consequatur nisi. Dolores rem labore, quisquam ducimus corporis quam necessitatibus inventore tempora dignissimos.`
  };
  limit = 100;
  convertedCourse: any = [];
  // courseS = JSON.stringify(this.course);

  constructor() { }

  ngOnInit() {
    for (const key in this.course) {
      if (this.course.hasOwnProperty(key)) {
        const element = this.course[key];
        console.log(key);
        this.convertedCourse.push([key, this.course[key]]);
      }
    }
    console.log(this.convertedCourse);
  }

}
