import { TestBed } from '@angular/core/testing';

import { DocManageService } from './doc-manage.service';

describe('DocManageService', () => {
  let service: DocManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
