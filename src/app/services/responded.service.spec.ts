import { TestBed } from '@angular/core/testing';

import { RespondedService } from './responded.service';

describe('RespondedService', () => {
  let service: RespondedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespondedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
