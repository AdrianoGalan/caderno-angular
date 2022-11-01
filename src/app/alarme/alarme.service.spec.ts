import { TestBed } from '@angular/core/testing';

import { AlarmeService } from './alarme.service';

describe('AlarmeService', () => {
  let service: AlarmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlarmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
