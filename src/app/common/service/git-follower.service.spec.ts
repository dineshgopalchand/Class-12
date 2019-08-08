import { TestBed } from '@angular/core/testing';

import { GitFollowerService } from './git-follower.service';

describe('GitFollowerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitFollowerService = TestBed.get(GitFollowerService);
    expect(service).toBeTruthy();
  });
});
