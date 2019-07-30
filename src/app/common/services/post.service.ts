import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  addData(body: any) {
    return this.http.post(this.url, body);
  }
}
