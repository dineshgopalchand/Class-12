import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  // inputs: ['someInput']
})
export class FavouriteComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('fav-item-details') favItem: any;
  // tslint:disable-next-line:no-output-rename
  @Output('likeChange') changeFav = new EventEmitter();
  like = false;
  inputParam: any = {};
  constructor() { }

  ngOnInit() {
    console.log(this.favItem);
    this.inputParam = this.favItem;
  }
  changeLikeStatus() {
    this.inputParam.like = !this.inputParam.like;
    if (!this.inputParam.like) {
      this.inputParam.count--;
    } else {
      this.inputParam.count++;
    }
    const message: FavResponse = {
      status: this.inputParam.like,
      count: this.inputParam.count,
      userInfo: {
        name: 'Dinesh',
        address: 'Bangalore'
      }
    };
    this.changeFav.emit(message);
    // this.inputParam.count=
  }

}

export class FavResponse {
  status: boolean;
  count: number;
  userInfo: UserInfo;
}
export class UserInfo {
  name: string;
  address: string;
}
