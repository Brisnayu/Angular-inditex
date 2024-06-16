import { TestBed } from '@angular/core/testing';

import { CalcFormService } from './calc-form.service';

describe('CalcFormService', () => {
  let service: CalcFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
