jest.unmock('../addNumbers');

import addNumbers from '../addNumbers';

describe('addNumbers', () => {
  it('is expected to pass', () => {
    const summed = addNumbers(1, 2);
    expect(summed).toEqual(3);
  });

  it('is expected to fail with an error message', () => {
    const summed = addNumbers(1, 2);
    expect(summed).toEqual(4);
  })
});
