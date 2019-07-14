import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FavResponse } from '../favourite/favourite.component';
// import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-demo-reusable',
  // template: '<div >.some message</div>',
  templateUrl: './demo-reusable.component.html',
  //   template: '<div *ngFor="let item of postDetails">\
  //   <app-favourite [fav-item-details]="item" (likeChange)="postChange($event)"></app-favourite>\
  // </div>',
  //   template: '<div *ngFor="let item of postDetails">'
  //     + '<app-favourite [fav-item-details]="item" (likeChange)="postChange($event)"></app-favourite>'
  //     + '</div>',
  template: `<div *ngFor="let item of postDetails">
    <app-favourite [fav-item-details]="item" (likeChange)="postChange($event)"></app-favourite>
  </div>`,


  styleUrls: ['./demo-reusable.component.css'],
  styles: [`div{background-color:#6778ff;}`, `div{box-shadow: 2px 4px 5px grey;}`],
  encapsulation: ViewEncapsulation.Emulated
})
export class DemoReusableComponent implements OnInit {

  postDetails = [
    { id: 1, like: true, count: 80 },
    // { id: 2, like: true, count: 80 },
    // { id: 3, like: false, count: 89 },
    // { id: 4, like: true, count: 86 },
    // { id: 5, like: false, count: 80 }
  ];
  constructor() { }

  ngOnInit() {
  }

  postChange(res: FavResponse) {
    console.log('post change');
    console.log(res.userInfo.address);
  }

}
