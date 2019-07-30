import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../common/helper/post';
import { PostService } from '../common/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  newPost = '';
  url = 'http://localhost:3000/posts';

  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit() {
    // this.http.get(this.url)
    this.postService.getAll()
      .subscribe(res => {
        // console.log((res as Post[]));
        this.posts = res as Post[];
      });
    // fetch('http://localhost:3000/posts').then(res => {
    //   console.log(res.json());
    // });
  }
  addPost() {
    console.log(this.newPost);

    // this.http.post(this.url, { userId: 1, title: this.newPost, body: '' })
    this.postService.addData({ userId: 1, title: this.newPost, body: '' })
      .subscribe(res => {
        console.log(res);
        this.posts.splice(0, 0, res as Post);
        this.newPost = '';
      });
  }
  deletePost(post: Post) {
    const indexVal = this.posts.indexOf(post);
    this.http.delete(this.url + '/' + post.id)
      .subscribe(res => {
        console.log(res);
        this.posts.splice(indexVal, 1);
      });
  }
  updatePost(post: Post) {
    // console.log(post);
    const indexVal = this.posts.indexOf(post);
    // const newPost = Object.assign(post);
    // const newPost = post;
    const newPost = Object.assign({}, post);
    // const newPost = JSON.parse(JSON.stringify(post));
    newPost.title = newPost.title + '----';
    console.log(newPost);
    this.http.put(this.url + '/' + post.id, newPost)
      .subscribe(res => {
        console.log(res);
        this.posts.splice(indexVal, 1, res as Post);
      });
    // this.http.patch(this.url + '/' + post.id, { title: post.title + '....' })
    //   .subscribe(res => {
    //     console.log(res);
    //     this.posts.splice(indexVal, 1, res as Post);
    //   });
    // console.log(post);
    // console.log(this.posts);
  }

}
