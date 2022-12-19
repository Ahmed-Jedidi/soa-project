import { TestBed } from '@angular/core/testing';

import { PlanteService } from './plante.service';

describe('PlanteService', () => {
  let service: PlanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
