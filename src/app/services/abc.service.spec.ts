/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AbcService } from './abc.service';

describe('AbcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbcService]
    });
  });

  it('should ...', inject([AbcService], (service: AbcService) => {
    expect(service).toBeTruthy();
  }));
});
