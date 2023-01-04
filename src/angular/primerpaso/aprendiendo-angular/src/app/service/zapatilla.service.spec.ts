/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZapatillaService } from './zapatilla.service';

describe('Service: Zapatilla', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZapatillaService]
    });
  });

  it('should ...', inject([ZapatillaService], (service: ZapatillaService) => {
    expect(service).toBeTruthy();
  }));
});
