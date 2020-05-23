import filterEmptyFromObject from '@app/utils/filter-empty';

describe('filterEmptyFromObject utility', () => {
  it('should filter values passed in the argument from the object', () => {
    expect(filterEmptyFromObject({prop1: 1, prop2: 2, propIncorrect1: false, propIncorrect2: ''}, [false, '']))
      // @ts-ignore
      .toEqual({prop1: 1, prop2: 2});
  });
});
