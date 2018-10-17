'use strict';

module.exports = function findCommonValue(string) {
  const map = new Map();

  if (typeof string !== 'string') {
    return undefined;
  }
  const splitArray = string.split(' ');
  for (let i = 0; i < splitArray.length; i++) {
    if (map.get(splitArray[i])) {
      return splitArray[i];
    }
    map.set(splitArray[i], true);
  }
  return null;
};
