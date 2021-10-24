import { TestBed } from '@angular/core/testing';

import { QueueNumberService } from './queue-number.service';

describe('QueueNumberService', () => {
  let service: QueueNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueueNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
