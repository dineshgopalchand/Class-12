import { Injectable } from '@angular/core';
import { DataService } from '../services/data-service';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../config/url.config';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitFollowerService extends DataService {

  constructor(http: HttpClient) {
    super(http, apiUrl.gitApiUrl);
  }

  getFollowerList(username: string) {
    return this.http.get(this.url + 'users/' + username + '/followers')
    .pipe(catchError(this.errorHandler));
  }
  getRepoList(username: string) {
    return this.http.get(this.url + 'users/' + username + '/repos')
    .pipe(catchError(this.errorHandler));
  }
  getUserDetails(username: string) {
    return this.http.get(this.url + 'users/' + username + '/')
    .pipe(catchError(this.errorHandler));
  }
}
