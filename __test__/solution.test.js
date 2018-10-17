'use strict';

const map = require('../lib/solution');

describe('#solution.js', () => {
  test('map should return the first word that should be repeated', () => {
    const sampleString = 'The pretty princess, had a pretty dress';
    expect(map(sampleString)).toEqual('pretty');
  });
  test('map should undefined if there is nothing in the string', () => {
    expect(map()).toEqual(undefined);
  });
  test('String passed through that does not have common words return null', () => {
    const sampleString = 'I love chocolate, its the best flavor';
    expect(map(sampleString)).toEqual(null);
  });
});
