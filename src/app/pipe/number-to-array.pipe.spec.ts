import { NumberToArrayPipe } from './number-to-array.pipe';

describe('NumberToArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberToArrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform a number to an array of this amount of number', () => {
    const pipe = new NumberToArrayPipe();
    expect(pipe.transform(3)).toEqual([1, 2, 3]);
  });
});
