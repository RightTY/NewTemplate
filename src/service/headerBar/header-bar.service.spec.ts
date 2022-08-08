import { TestBed } from '@angular/core/testing';

import { HeaderBarService } from './header-bar.service';

describe('HeaderbarService', () => {
  let service: HeaderBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
