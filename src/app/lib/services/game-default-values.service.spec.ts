import { TestBed } from '@angular/core/testing';

import { GameDefaultValuesService } from './game-default-values.service';

describe('GameDefaultValuesService', () => {
  let service: GameDefaultValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameDefaultValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
