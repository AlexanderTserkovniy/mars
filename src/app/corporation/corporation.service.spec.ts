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

  it('should getCorporationsChoiceForCurrentPlayer return last value as designed', () => {
    const result = new Array(7).fill(1).map(_ => service.getCorporationsChoiceForCurrentPlayer());
    expect(result[result.length - 1][1]['Card #']).toBe('FOR TESTING PURPOSES ONLY!');
  });

  // TODO Rewrite this shit
  for (let times = 50; times > 0; times--) {
    for (let length = corporationsArray.length; length > 0; length -= 6) {
      it('should never return the same corporations', () => {
        const result1 = service.getCorporationsChoiceForCurrentPlayer();
        const result2 = service.getCorporationsChoiceForCurrentPlayer();
        const result3 = service.getCorporationsChoiceForCurrentPlayer();
        const result4 = service.getCorporationsChoiceForCurrentPlayer();
        const result5 = service.getCorporationsChoiceForCurrentPlayer();

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

        // @ts-ignore
        expect(result4[0]).not.toEqual({});
        // @ts-ignore
        expect(result4[1]).not.toEqual({});

        // @ts-ignore
        expect(result5[0]).not.toEqual({});
        // @ts-ignore
        expect(result5[1]).not.toEqual({});
      });
    }
  }
});
