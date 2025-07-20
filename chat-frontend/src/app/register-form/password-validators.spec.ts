import { TestBed } from '@angular/core/testing';

import { PasswordValidators } from './password-validators';

describe('PasswordValidators', () => {
  let service: PasswordValidators;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordValidators);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
