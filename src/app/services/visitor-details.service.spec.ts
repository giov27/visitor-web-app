import { TestBed } from '@angular/core/testing';

import { VisitorDetailsService } from './visitor-details.service';

describe('VisitorDetailsService', () => {
  let service: VisitorDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
