import { TestBed } from '@angular/core/testing';

import { DniService } from './dni.service';

describe('DniService', () => {
  let service: DniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
