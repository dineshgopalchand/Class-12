import { Component, OnInit } from '@angular/core';
import { GitFollowerService } from '../common/service/git-follower.service';

@Component({
  selector: 'app-git-followers',
  templateUrl: './git-followers.component.html',
  styleUrls: ['./git-followers.component.css']
})
export class GitFollowersComponent implements OnInit {
  followersList: any[] = [];
  userName = '';
  showInputbox: boolean;
  userDetails: any = {};
  constructor(private gfs: GitFollowerService) { }

  ngOnInit() {
    this.showInputbox = this.userName !== '' ? false : true;
  }
  udpateUsername(input: HTMLInputElement) {
    this.showInputbox = false;
    this.userName = input.value;
    this.getFollowerList();
  }
  getFollowerList() {
    this.gfs.getFollowerList(this.userName)
      .subscribe(res => {
        console.log(res);
        this.followersList = res as any[];
      });
  }
  getUserDetails() {
    this.gfs.getUserDetails(this.userName)
      .subscribe(res => {
        console.log(res);
        this.userDetails = res;
      });
  }
}


// {
//   "login": "RinsyBacker",
//   "id": 2377293,
//   "node_id": "MDQ6VXNlcjIzNzcyOTM=",
//   "avatar_url": "https://avatars0.githubusercontent.com/u/2377293?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/RinsyBacker",
//   "html_url": "https://github.com/RinsyBacker",
//   "followers_url": "https://api.github.com/users/RinsyBacker/followers",
//   "following_url": "https://api.github.com/users/RinsyBacker/following{/other_user}",
//   "gists_url": "https://api.github.com/users/RinsyBacker/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/RinsyBacker/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/RinsyBacker/subscriptions",
//   "organizations_url": "https://api.github.com/users/RinsyBacker/orgs",
//   "repos_url": "https://api.github.com/users/RinsyBacker/repos",
//   "events_url": "https://api.github.com/users/RinsyBacker/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/RinsyBacker/received_events",
//   "type": "User",
//   "site_admin": false
// }
