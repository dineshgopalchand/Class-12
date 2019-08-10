import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitFollowerService } from '../common/service/git-follower.service';

@Component({
  selector: 'app-git-user-repo',
  templateUrl: './git-user-repo.component.html',
  styleUrls: ['./git-user-repo.component.css']
})
export class GitUserRepoComponent implements OnInit {

  userName: string;
  userId: number;
  reposList: any = [];
  totalNumber = 125;
  limit = 10;
  start = 0;
  currentPage = 1;
  constructor(private route: ActivatedRoute, private gitService: GitFollowerService) { }

  ngOnInit() {
    this.route.params
      .subscribe(param => {
        console.log(param);
        this.userName = param.username;
        this.userId = param.userid;
        console.log(param.userid);
        this.gitService.getRepoList(this.userName)
          .subscribe(repolist => {
            console.log(repolist);
            console.log((repolist as any[]).length);
            this.reposList = repolist;
          });
      });
    this.route.queryParamMap
      .subscribe(queryParam => {
        console.log(queryParam);
        console.log(queryParam.get('limit'));
        console.log(queryParam.get('pagenumber'));
        console.log(queryParam.get('start'));
      });
  }

  get pageCountArr() {
    return [...Array(this.pageCount).keys()];
  }
  get pageCount() {
    return Math.ceil(this.totalNumber / this.limit);
  }

}
