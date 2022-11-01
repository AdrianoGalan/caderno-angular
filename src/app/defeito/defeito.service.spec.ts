import { TestBed } from '@angular/core/testing';

import { DefeitoService } from './defeito.service';

describe('DefeitoService', () => {
  let service: DefeitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefeitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
