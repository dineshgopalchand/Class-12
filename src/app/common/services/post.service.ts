import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data-service';
import { apiUrl } from '../config/url.config';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {

  constructor(http: HttpClient) {
    const url = apiUrl.post;
    super(http, url);
  }
}
