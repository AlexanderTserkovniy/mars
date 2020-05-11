import { TestBed } from '@angular/core/testing';

import { CorporationService } from './corporation.service';
import corporationsArray from '@assets/corporations_array.json';

describe('CorporationService', () => {
  let service: CorporationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorporationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TODO Rewrite this shit
  for (let times = 50; times > 0; times--) {
    for (let length = corporationsArray.length; length > 0; length -= 6) {
      it('should never return the same corporations', () => {
        const result1 = service.getCorporationsChoiceForCurrentPlayer();
        const result2 = service.getCorporationsChoiceForCurrentPlayer();
        const result3 = service.getCorporationsChoiceForCurrentPlayer();
        expect(result1[0]).not.toEqual(result1[1]);
        expect(result2[0]).not.toEqual(result2[1]);
        expect(result3[0]).not.toEqual(result3[1]);

        expect(result1[0]).not.toEqual(result2[0]);
        expect(result1[0]).not.toEqual(result3[0]);

        expect(result1[1]).not.toEqual(result2[1]);
        expect(result1[1]).not.toEqual(result3[1]);

        expect(result2[0]).not.toEqual(result3[0]);

        expect(result2[1]).not.toEqual(result1[1]);
        expect(result2[1]).not.toEqual(result3[1]);

        expect(result3[0]).not.toEqual(result2[0]);

        expect(result3[1]).not.toEqual(result1[1]);
        expect(result3[1]).not.toEqual(result2[1]);
      });
    }
  }
});
