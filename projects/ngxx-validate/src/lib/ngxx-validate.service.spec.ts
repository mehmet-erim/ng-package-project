import { TestBed } from '@angular/core/testing';

import { NgxxValidateService } from './ngxx-validate.service';

describe('NgxxValidateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxxValidateService = TestBed.get(NgxxValidateService);
    expect(service).toBeTruthy();
  });
});
