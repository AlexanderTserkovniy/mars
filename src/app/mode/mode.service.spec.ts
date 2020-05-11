import { TestBed } from '@angular/core/testing';

import { ModeService } from './mode.service';

describe('ModeService', () => {
  let service: ModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should pipe results of getChosenMode', done => {
    service.chooseMode(1);
    service.getChosenMode().subscribe((val) => {
      expect(val).toBeTruthy();
      expect(val).toEqual({
        id: 1,
        name: 'hot seat',
        isEnabled: true,
      });
      done();
    });
  });
});
