import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../config/url.config';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends DataService {

  constructor(http: HttpClient) {
    const url = apiUrl.users;
    super(http, url);
  }
}
