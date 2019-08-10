import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitUserRepoComponent } from './git-user-repo.component';

describe('GitUserRepoComponent', () => {
  let component: GitUserRepoComponent;
  let fixture: ComponentFixture<GitUserRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitUserRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitUserRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
