import { TestBed } from '@angular/core/testing';

import { QuestionServService } from './question-serv.service';

describe('QuestionServService', () => {
  let service: QuestionServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
